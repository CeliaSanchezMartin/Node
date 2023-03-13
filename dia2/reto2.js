//Reto 2.

let object = {
    name: "Celia",
    surname: "Sánchez",
    age: "25"
}

const fs = require("fs/promises");

fs.writeFile("reto2.json", JSON.stringify(object))
.then( () => {
    return fs.readFile("reto2.json", "utf-8")
})
.then( data => {
    console.log(JSON.parse(data));
})
.catch(err => {
    console.log(err);
});