//Reto 3. 
//Utilizar el módule readline de node para solicitar los valores del objeto por consola.
let object = {
    name: "Celia",
    surname: "Sánchez",
    age: "25"
}

const fs = require("fs");
const readline = require("readline")



let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("¿Cómo te llamas?", (name) => {
    rl.question("¿Cuál es tu apellido?", (surname) =>{
     rl.question("¿Cuántos años tienes?", (age) => {
        let newObj = {name, surname, age};
        fs.writeFile("reto3.json", JSON.stringify(newObj),
        function (err) {
            if(err){
                return console.log(err);
            }
            console.log("Hola, " + newObj.name + " " + newObj.surname + " eres jovencíííísima");
        }
        );
    });
});
});
