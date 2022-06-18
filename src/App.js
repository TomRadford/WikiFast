import { useState, useEffect } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import SearchBar from './components/SearchBar'
import Home from './components/Home'
import wikiService from './services/wiki'
import Results from './components/Results'
import { Spinner } from './components/Atoms/Spinner'

const App = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(0)
  const [term, setTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  const [searchBarTerm, setSearchBarTerm] = useState('')

  const onSearchSubmit = async term => {
    const res = await wikiService.searchQuery(term)
    setResults(res.pages)
    setLoading(0)
  }

  useEffect(() => {
    if (term !== '') {
      setSearchBarTerm(term)
      onSearchSubmit(term)
    }
  }, [term])  // eslint-disable-line 


  const reset = () => {
    setDebouncedTerm('')
    setLoading(0)
    setResults([])
  }

  return (
    <Routes>
      <Route path='/' element={<Layout
        onSearchSubmit={onSearchSubmit}
        setResults={setResults}
        setLoading={setLoading}
        loading={loading}
        reset={reset}
        setTerm={setTerm}
        term={term}
        setDebouncedTerm={setDebouncedTerm}
        debouncedTerm={debouncedTerm}
        searchBarTerm={searchBarTerm}
        setSearchBarTerm={setSearchBarTerm}
      />}>
        <Route index element={<Home
          loading={loading}
        />} />
        <Route path='results/:urlTerm' element={<Results
          results={results}
          loading={loading}
        />} />
        <Route path='*' element={
          <div>
            Woops looks like thats a 404
          </div>
        } />
      </Route>

    </Routes>
  )
}

const Layout = (props) => {
  return (
    <div className="app">
      <div className='header'>
        <Link to='/'>
          <h1 className='title' onClick={props.reset}>WikiFast!</h1>
        </Link>
        <SearchBar
          onSearchSubmit={props.onSearchSubmit}
          setResults={props.setResults}
          setLoading={props.setLoading}
          setTerm={props.setTerm}
          term={props.term}
          setDebouncedTerm={props.setDebouncedTerm}
          debouncedTerm={props.debouncedTerm}
          searchBarTerm={props.searchBarTerm}
          setSearchBarTerm={props.setSearchBarTerm} />
      </div>
      <div className='main-content'>
        <Spinner loading={props.loading} />
        <Outlet />
      </div>
      <div className='tom'>
        Made for fun ✨ by Tom Radford
      </div>
    </div>
  )
}

export default App;
