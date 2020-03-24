const extractLinks = (parsedFile, path) => {
    return new Promise((resolve, reject) => {

        if(typeof parsedFile !== 'string') {
            reject('NOT A STRING!');
        }

        const regEx = /\[(.*?)\]\((.*?)\)/gm;
        const matchedLinksArr = parsedFile.match(regEx);
        const arrObject = matchedLinksArr.map((item) => {

            const objectLink = {
                Text: item.slice(1,item.indexOf(']')),
                Href: item.slice(item.indexOf('(') +1, item.indexOf(')')),
                path,
            }

            return objectLink;
        })

        resolve(arrObject);

    })
}

module.exports.extractLinks = extractLinks;