const { readFileToString } = require('./scripts/readFileToString.js');

const mdLinks = (path, options = { validate: false, stats: false }) => {

    const promise = new Promise((resolve, reject) => {
        readFileToString(path)
        .then(data => {
            resolve(data);
        })
        .catch(reject);
    })
    return promise;
}

module.exports = { mdLinks };
