const fetch = require('node-fetch');

module.exports.getStatusLink = (arrayLinks) => {

    let promises = [];

    for (let item of pathInfoArray) {

        promises.push(fetch(item.Href));
    }
    const validatePromise = Promise.all(promises)

            .then(resArr => {
                let totalArray = resArr.map(element => {
                    
                    if(element.status >= 200 && element.status < 300){

                        let object = {
                            Href: element.url, 
                            Status: element.status
                            };
                            return object;

                    } else {

                        let object = {
                            Href: element.url, 
                            Status: element.status
                            };
                            return object;
                    }
                })
                    return totalArray;
            })
            .catch((err) => {
                console.log(err));
                    
    return validatePromise;
}