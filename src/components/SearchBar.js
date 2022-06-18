import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/SearchBar.css'

const SearchBar = ({ onSearchSubmit, setResults, setLoading, setTerm, term, setDebouncedTerm, debouncedTerm, setSearchBarTerm, searchBarTerm }) => {
    const navigate = useNavigate()
    const { urlTerm } = useParams()

    useEffect(() => {
        if (urlTerm !== undefined) {
            console.log('url: ' + urlTerm)
            setLoading(1)
            setTerm(urlTerm)
        }
    }, [urlTerm]) // eslint-disable-line 

    useEffect(() => {
        if (debouncedTerm !== '') {
            const timer = setTimeout(() => {
                setTerm(debouncedTerm)
                navigate(`results/${debouncedTerm}`)
                setSearchBarTerm(debouncedTerm)
                document.title = `${debouncedTerm} - WikiFast!`
            }, 1000)
            return () => clearTimeout(timer)
        } else {
            setResults([])
        }
    }, [debouncedTerm]) // eslint-disable-line 

    const handleChange = ({ target }) => {
        if (target.value === '') {
            setLoading(0)
            setTerm('')
            document.title = `WikiFast!`
            navigate('/')
        } else {
            if (target.value === term) {
                setLoading(0)
            } else {
                setLoading(1)
            }
        }
        setSearchBarTerm(target.value)
        setDebouncedTerm(target.value)
    }


    return (
        <div className='searchbar'>
            <input
                className='searchbar-input'
                type='text'
                placeholder='Search anything on Wiki'
                onChange={handleChange}
                value={searchBarTerm} />
        </div>
    )
}
export default SearchBar