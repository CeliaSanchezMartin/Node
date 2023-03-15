//Reto 2.

let object = {
    name: "Celia",
    surname: "Sánchez",
    age: "25"
}

const fs = require("fs/promises");
/*
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

*/

async function asyncAwait(){
    try {
    await fs.writeFile("reto2.json", JSON.stringify(object))
    const nuevo = await fs.readFile("reto2.json", "utf-8")

    console.log(JSON.parse(nuevo));
    } catch (error) {
        console.log(error);
    } 
}

asyncAwait();