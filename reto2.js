//Reto 2.
//Crear un objeto .

let object = {
    name: "Celia",
    surname: "Sánchez",
    age: "25"
}

const fs = require("fs");

fs.writeFile("reto2.json", JSON.stringify(object),function(err) {
    if(err) {
        return console.error(err);

    }
    console.log("El objeto tiene este contenido:");
    console.log(fs.readFileSync("reto2.json", "utf-8"));
})