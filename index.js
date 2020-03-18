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

            resolve(response)
        })
        .catch(reject);
        })

        if (options = {validate: true, stats: false }){
            const httpStatusLinks = getStatusLink(response)
        }
}