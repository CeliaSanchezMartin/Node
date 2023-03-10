const fs = require("fs");
const readline = require("readline")

let rl = readline.createInterface(process.stdin, process.stdout);


function readConsole(callback){
    let obj = {
        name: "",
        surname: "",
        age: 0
    }
    rl.question("¿Cómo te llamas?", (name) =>{
        rl.question("¿Cuál es tu apellido?", (surname) =>{
            rl.question("¿Cuántos años tienes?", (age) =>{
                obj = {name, surname, age};
                callback(obj);
            })
        })
    })
}

module.exports = {readConsole}