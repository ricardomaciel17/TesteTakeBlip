const axios = require('axios').default
const urlBase = 'https://api.github.com/users/takenet/repos'
const page = 1 
const per_page = 10
const sort = 'created_at'
const direction = 'asc'

const url = `${urlBase}?&page=${page}&per_page=${per_page}&sort=${sort}&direction=${direction}`
const AcceptHeader = `Accept': 'application/vnd.github.v3+json`
const responseType = 'json'
const method = 'get'

const getRepositorios = async () => {
    const response = await axios({
        method: method,
        url: url,
        responseType: responseType,
        headers: {
            AcceptHeader
        }
    })
    return response;
}

module.exports = {
    getRepositorios,
}
