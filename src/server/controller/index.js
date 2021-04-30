const { getRepositorios } = require('../services/api')

const dadosRepositorio = async (req, response) => {
    try {
        const repos = await getRepositorios()
            .then((response) => response.data)
            .then(json => json
                .filter((repo) => repo.language == 'C#'))
            .catch((err) => console.log(err))

        const filteredProps = [];
        for (let i in repos) {
            filteredProps.push({
                name: repos[i].name,
                description: repos[i].description,
                avatar_url: repos[i].owner.avatar_url
            })
        };

        return repos
            ? response.status(200).json(filteredProps)
            : response.status(503).json({ message: 'Service unavailable' })

    } catch (error) {
        response.status(500).json({ message: error })
    }
}
    
module.exports = {
    dadosRepositorio,
}
