const fetch = require('node-fetch');

module.exports.getStatusLink = (array) => {
    //Debe recibir un array de Links
    return new Promise((resolve, reject)=> {
        const newArray =array.map( (element) => {
            return new Promise((resolve, reject)=> {
                
                fetch(element.href)
                .then((res) => {
                    let object = {
                        Href: "", 
                        Status: ""
                        };

                    if(res.status >= 200 && res.status < 300){
                        object.Href = res.url;
                        object.Text = element.text;
                        object.Status = res.status;
                        object.StatusText = res.statusText;

                        resolve(object);
                    } else {

                        object.Href = res.url;
                        object.Text = element.text;
                        object.Status = res.status;
                        object.StatusText = res.statusText;

                        resolve(object);
                    }
                })
                .catch((err)=>{
                    reject("No se pudo realizar la peticion al link", err)
                })
            })
        })        
        Promise.all(newArray).then((res)=> {
            //console.log("esto queremos devolvers",res);
            resolve(res);
        
        })
    });

}
    /*
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
} */