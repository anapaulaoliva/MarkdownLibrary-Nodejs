const fs = require('fs');

module.exports.readFileToString = (path) => {

    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject('READ FILE ERROR')
            }
            resolve(data);
        })
    })
}
