//
const fs = require("fs/promises");
const readline = require("readline")

function pregunta (pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        })
    })
    return question;
};

function readConsole(callback){
    let obj = {
        name: "",
        surname: "",
        age: 0
    }
    pregunta("¿Cómo te llamas?")
    .then((name) => {
        obj.name = name;
        return pregunta("¿Cuál es tu apellido?")
    })
    .then((surname) => {
        obj.surname = surname;
        return pregunta ("¿Cuántos años tienes?")
    })
    .then((age) => {
        obj.age = age;
        callback(obj)
    })
    .catch(err => {
        console.log(err);
    })
};

module.exports = {readConsole}
