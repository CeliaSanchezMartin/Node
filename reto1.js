//Reto 1.
//Hacer un mensaje que se ejecute nada más ejecutar el programa.

console.log("Mensaje 1");

//Pasados 3 segundos, debe imprimir :
setTimeout( function (){
    console.log("Mensaje 2")
    console.log("Mensaje 3");
}, 3000)