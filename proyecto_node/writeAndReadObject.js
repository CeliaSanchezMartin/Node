const fs = require("fs");


export function writeAndRead(path, object){
    fs.writeFile(path, JSON.stringify(object), (err) => {
        if (err){
            console.log(err);
        } else {
            console.log(fs.readFile(path, "utf-8", (err, data) =>{
                console.log("El contenico del objeto es: " + data);
            }))
        }
         

    })
    
}

