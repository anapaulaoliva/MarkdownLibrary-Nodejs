const extractLinks = (parsedFile) => {
    return new Promise((resolve, reject) => {

        if(typeof parsedFile !== 'string') {
            reject('NOT A STRING!');
        }

        const regEx = '';
        const matchedLinksArr = parsedFile.match(regEx);

        const arrObject = matchedLinksArr.map((item) => {

            const objectLink = {
                text: item.slice(1,item.indexOf(']')),
                href: item.slice(item.indexOf('(') +1, item.indexOf(')')),
                path,
            }
            return objectLink;
        })
        
        resolve(arrObject);

    })
}

module.exports = { extractLinks };