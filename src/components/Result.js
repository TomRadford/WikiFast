import '../styles/Result.css'
import Image from '../components/Image'

const getImage = (result) => {
    try {
        return <Image
            alt={result.description}
            src={result.thumbnail.url}
            className='result-thumbnail'
        />
    } catch {
        return <Image
            alt='Wikipedia logo'
            src='/Wikipedia_logo_v3.svg'
            className='result-thumbnail-no-img'
        />
    }
}

const Result = ({ result }) => {
    return (
        <a href={`https://en.wikipedia.org/wiki/${result.key}`} target='_blank' rel="noreferrer" >
        <div className='result'>
            <div className='result-text'>
                <div className='result-title'>{result.title}</div>
                <div className='result-description'>{result.description}</div>
            </div>
            {getImage(result)}
        </div>
        </a>
    )
}

export default Result