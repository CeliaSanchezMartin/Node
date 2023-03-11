const fs = require("fs/promises");

function writeAndRead(path, object){
    fs.writeFile(path, JSON.stringify(object))
    .then(() => {
        return fs.readFile(path, "utf-8")
    })
    .then( data => {
        console.log("El contenido del objeto es: ");
        console.log(JSON.parse(data));
    })
    .catch( err => {
        console.log(err);
    })
}

module.exports = {writeAndRead}
