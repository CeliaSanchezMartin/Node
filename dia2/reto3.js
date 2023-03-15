//Reto 3.

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

let object = {
    name: "Celia",
    surname: "Sánchez",
    age: 25
};
/*

pregunta("¿Cómo te llamas?")
.then((name) => {
    object.name = name;
    return pregunta("¿Cuál es tu apellido?")
})
.then((surname) => {
    object.surname = surname;
    return pregunta("¿Cuántos años tienes?")
})
.then((age) => {
    object.age = age;
    return fs.writeFile("reto3.json", JSON.stringify(object))

})
.then(() => {
    return fs.readFile("reto3.json", "utf-8")
})
.then(data => {
    console.log(JSON.parse(data) );
})
.catch(err => {
    console.log(err);
})
*/
async function asyncAwait(){
    try{
        object.name = await pregunta("¿Cómo te llamas?");
        object.surname = await pregunta ("¿Cuál es tu apellido?");
        object.age = await pregunta ("¿Cuántos años tienes?");

        await fs.writeFile("reto3.json", JSON.stringify(object));
        const obj = await fs.readFile("reto3.json", "utf-8");
        console.log(JSON.parse(obj));
    }
    catch (err) {
        console.log(err);
    }
};

asyncAwait();
