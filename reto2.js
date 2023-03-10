//Reto 2.
//Crear un objeto .

 let object = {
    name: "Celia",
    surname: "Sánchez",
    age: "25"
}

const fs = require("fs");

fs.writeFile("reto2.json", JSON.stringify(object), () => {
    fs.readFileSync("reto2.json", "utf-8", (err,data) => {
        if (err){
            console.log(err);
        } else {
            console.log("El objeto tiene este contenido: ");
            console.log(JSON.parse(data));

        }
    })
    
})