const { readFileToString } = require('./scripts/readFileToString.js');
const { extractLinks } = require('./scripts/extractLinks.js');

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
}