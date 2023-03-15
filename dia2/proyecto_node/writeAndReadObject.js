const fs = require("fs/promises");
/*
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
*/
async function writeAndRead(path, object){
    try{
        await fs.writeFile(path, JSON.stringify(object))
        const obj = await fs.readFile(path, "utf-8")
        console.log(JSON.parse(obj));
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = {writeAndRead}
