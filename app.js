const { readFileToString } = require('./scripts/readFileToString.js');
const { extractLinks } = require('./scripts/extractLinks.js');

const mdLinks = (path, options = { validate: false, stats: false }) => {

    const promise = new Promise((resolve, reject) => {
        readFileToString(path)
        .then((response) => {
            return extractLinks(response, path)
        
        .then(response => {

            resolve(response)
        })
        .catch(reject);
        })
    return promise;
    })
}

module.exports = { mdLinks };
