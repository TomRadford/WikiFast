import { useState, useEffect, lazy } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import SearchBar from './components/SearchBar'
import Home from './components/Home'
import wikiService from './services/wiki'
import { Spinner } from './components/Atoms/Spinner'
const Results = lazy(() => import('./components/Results'))

const App = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(0)
  const [term, setTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  const [searchBarTerm, setSearchBarTerm] = useState('')

  const onSearchSubmit = async term => {
    const res = await wikiService.searchQuery(term)
    setResults(res.pages)
  }


  const handleTermChange = async () => {
    setResults([])
    setLoading(1)
    await onSearchSubmit(term)
    setSearchBarTerm(term)
    setLoading(0)
  }

  useEffect(() => {
    if (term !== '') {
      handleTermChange()
    }
  }, [term])  // eslint-disable-line 

  const reset = () => {
    document.title = `WikiFast!`
    setDebouncedTerm('')
    setSearchBarTerm('')
    setLoading(0)
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
        Made for fun ??? by Tom Radford
      </div>
    </div>
  )
}

export default App;
