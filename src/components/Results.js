import Result from "./Result"
const Results = ({ results, loading }) => {
    if (results.length === 0 && !loading) return (
        <div>
            Nothing found!
        </div>
    )

    if (!loading) return (
        <div className='result-container'>
            {results.map(result =>
                <Result key={result.id} result={result} />
            )}
        </div>
    )
}

export default Results