const fs = require("fs");


function writeAndRead(path, object){
    fs.writeFile(path, JSON.stringify(object), () => {
        fs.readFile(path, "utf-8",(err, data) =>{
            if(err){
                console.log(err);
            } else {
                console.log("El contenido del objeto es: ");
                console.log(JSON.parse(data));
            }
        } )
    })

    }
    


module.exports = {writeAndRead}
