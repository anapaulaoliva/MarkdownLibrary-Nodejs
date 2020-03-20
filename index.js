const { readFileToString } = require('./scripts/readFileToString.js');
const { extractLinks } = require('./scripts/extractLinks.js');
const { getStatusLink } = require('./scripts/getStatusLink.js')

module.exports.mdLinks = (path, options = { validate: false, stats: false }) => {

    return new Promise((resolve, reject) => {
        readFileToString(path)
        .then((response) => {
            return extractLinks(response, path)
        })
        .then(response => {
            if (options.validate && options.stats) {
                return getStatusLink(response)
            } else if(options.validate) {
                resolve(getStatusLink(response))
                
            } else if(options.stats) {
                resolve("Conteo de todos los links del 'response'")
            }
            resolve(response);
        })
        .then((response) => {
            resolve("Conteo de los links mas el conteo de links rotos osea validados", response)
        })
        .catch(reject);
        })
}
