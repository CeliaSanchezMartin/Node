//const { response } = require("../app");
const Book = require("../models/book")

let book = null

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de inicio"};
    response.send(respuesta);
}

function getBook(request, response){
    let respuesta;
    if(book != null){
        respuesta = {error: false, codigo: 200, data: book};
    } else {
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe."}
    }

    response.send(respuesta);
}

function postBook(request, response){
    let respuesta;
    console.log(request.body);
    //console.log(request.body.author);

    if(book === null){
        book = new Book (request.body.id_book,
                         request.body.title,
                         request.body.type,
                         request.body.author,
                         request.body.price,
                         request.body.photo,
                         request.body.id_user)

            respuesta = {error: false, codigo:200,
                mensaje:"Libro creado con exito", data: book}
    } else {
        respuesta = {error: true, codigo: 200,
            mensaje: "El libro ya existe", data: null}
    }

    response.send(respuesta);
}

function putBook(request, response){
    let respuesta;

    if(book != null){
        book.id_book = request.body.id_book;
        book.title = request.body.title;
        book.type = request.body.type;
        book.author = request.body.author;
        book.price = request.body.price;
        book.photo = request.body.photo;
        book.id_user = request.body.id_user;


        respuesta = { error: false, codigo: 200,
            mensaje: "El libro se ha modificado correctamente", data: book}


    } else {
        respuesta = { error: true, dofigo: 200,
            mensaje: "El libro no existe", data: book}
    };

    response.send(respuesta);
};

function deleteBook(request, response){
    let respuesta;

    if(book != null){

        book = null;

        respuesta = {error: false, codigo: 200,
            mensaje: "El libro ha sido eliminado", data: book }
    } else {
        respuesta = {error: true, codigo: 200,
            mensaje: "El libro no existe", data: book}
    }

    response.send(respuesta);
}

module.exports = {getStart, getBook, postBook, putBook, deleteBook};