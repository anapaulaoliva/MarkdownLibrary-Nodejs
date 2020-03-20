const fetch = require('node-fetch');

module.exports.getStatusLink = (array) => {

    return new Promise((resolve, reject)=> {
        const newArray =array.map( (element) => {
            return new Promise((resolve, reject)=> {
                
                fetch(element.href)
                .then((res) => {
                    let object = {
                        Href: res.url,
                        Text: element.text,
                        Status: res.status,
                        StatusText: res.statusText
                        };
                    resolve(object);
                })
                .catch((err)=>{
                    reject("Error at node-fetch request", err)
                })
            })
        })        
        Promise.all(newArray).then((res)=> {

            resolve(res);
        
        })
    });

}