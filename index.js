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

                return getStatusLink(response);

            } else if (options.validate) {

                resolve(getStatusLink(response))

            } else if (options.stats) {

                let chart = {
                    "Total": response.length,
                    "Unique": response.length
                }
                resolve(console.table(chart))
            }

        resolve(response);
        })

        .then((linksObj) => {

            let chart = {
                "Total": linksObj.length,
                "Unique": 0,
                "Broken": 0
            }
            linksObj.forEach((item) => {

                if (item.StatusText == 'Not Found') {
                    chart.Broken++;
                } else if (item.StatusText == 'OK') {
                    chart.Unique++;
                }
            })
            
            console.table(chart)
            return chart;
        })
        .catch(reject);
        })
}
