import '../styles/Result.css'
import { useRef } from 'react'
import Image from '../components/Image'

const getImage = ( result ) => {
    try {
        return <Image 
        alt={result.description} 
        src={result.thumbnail.url} 
        className='result-thumbnail' 
        />
    } catch {
        return (
            <div className='result-thumbnail-no-img' >
                <img src='/Wikipedia_logo_v3.svg' alt='Wikipedia logo' />
            </div >
        )
    }
}

const Result = ({ result }) => {

    
    return (
        <div className='result'>
            <div className='result-text'>
                <div className='result-title'>{result.title}</div>
                <div className='result-description'>{result.description}</div>
            </div>
            {getImage(result)}
        </div>
    )
}

export default Result