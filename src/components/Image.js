import { Spinner } from "./Atoms/Spinner"
import { useState } from "react"

const Image = ({ alt, src, className }) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className={className}>
        {(!loaded) && <Spinner loading={1} />  }
        <img alt={alt}
            src={src}
            style={loaded ? {display: 'block' } : {display: 'none'}}
            onLoad={() => setLoaded(true)}
        />
        </div>
    )
}

export default Image