const fs = require('fs');

const readFileToString = (path) => {

    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject('READ FILE ERROR')
            }
            resolve(data);
        })
    })
}

module.exports = { readFileToString };