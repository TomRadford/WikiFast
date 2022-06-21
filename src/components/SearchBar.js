import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/SearchBar.css'

const SearchBar = ({ onSearchSubmit, setResults, setLoading, setTerm, term, setDebouncedTerm, debouncedTerm, setSearchBarTerm, searchBarTerm }) => {
    const navigate = useNavigate()
    const { urlTerm } = useParams()

    useEffect(() => {
        if ((urlTerm !== undefined) && (term === '') ) {
            setLoading(1)
            document.title = `${urlTerm} - WikiFast!`
            setTerm(urlTerm)
            setSearchBarTerm(urlTerm)

        } else {
            setLoading(0)
        }
    }, [urlTerm]) // eslint-disable-line 

    useEffect(() => {
        if (debouncedTerm !== '') {
            const timer = setTimeout(() => {
                setTerm(debouncedTerm)
                navigate(`results/${debouncedTerm}`)
                
                document.title = `${debouncedTerm} - WikiFast!`
            }, 1000)
            return () => clearTimeout(timer)
        } 
        // else {
        //     setResults([])
        // }
    }, [debouncedTerm]) // eslint-disable-line 

    const handleChange = ({ target }) => {
        if (target.value === '') {
            setLoading(0)
            setTerm('')
            document.title = `WikiFast!`
            navigate('/')
        } else {
            setLoading(1)
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