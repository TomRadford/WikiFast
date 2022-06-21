import axios from 'axios'
import { memoize } from 'lodash'

const baseUrl = 'https://en.wikipedia.org/w/rest.php/v1'

const config = {
    headers: {
        'Api-User-Agent': 'WikiFast/1.0 (<tomradford321@gmail.com>)'
    }
}

const searchQuery = memoize(async (query) => {
    const response = await axios.get(`${baseUrl}/search/page?q=${query}&limit=20`, config)
    return response.data
})

const exports = {
    searchQuery
}

export default exports