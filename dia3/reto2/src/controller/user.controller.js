const { response } = require("../app");
const Book = require("../models/book")
//let usuario = null;
let book = null
let libro = new Books(1,1,"La Verdad Sobre el caso de Harry Quebert","Tapa Blanda","Joël Dicker",22,"https://imagessl5.casadellibro.com/a/l/t7/65/9788420414065.jpg");
let libro2 = new Books(2,1,"Esperando al Diluvio","Tapa Blanda","Dolores Redondo",21.75,"https://imagessl9.casadellibro.com/a/l/t7/79/9788423362479.jpg");
let libros = [libro, libro2]

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de inicio"};
    response.send(respuesta);
}

function getBook(request, response){
    let respuesta;
    if(libros != null){
        respuesta = {error: false, codigo: 200, data: libros};
    } else {
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe."}
    }

    response.send(respuesta);
}

function getOneBook(request, response){
    let id = request.query.id;

    let librodevuelto = libros.find(book => book.id_book == id );

    let respuesta;

    if(libros.lenght != 0 && (librodevuelto != undefined)){
        respuesta = {error: false, codigo: 200, data: book}
    } else {
        respuesta = {error: false, codigo: 200, data: libros}
    }

    response.send(respuesta);
}

function postBook(request, response){
    let respuesta;
    console.log(request.body);
    if (book === null){
        book = new Book (request.body.id_book, request.body.id_user, request.body.title, request.body.type, request.body. author, request.body. price, request.body.photo)
        respuesta = { error: false, codigo: 200, mensaje: "Libro creado con exito", data: book}
    } else {
        respuesta = {error: true, codigo: 200, mensaje: "El libro ya existe"}
    }
    libros.push(book);

    response.send(respuesta);
}

function putBook(request){
    let  modifiedbook = libros.findIndex( book => 
        book.id_book == request.body.id_book)
    
    let respuesta;
    if(modifiedbook != -1){
        libros[modifiedbook].id_book = request.body.id_book;
        libros[modifiedbook].id_user = request.body.id_user;
        libros[modifiedbook].title = request.body.title;
        libros[modifiedbook].type = request.body.type;
        libros[modifiedbook].author = request.body.author;
        libros[modifiedbook].price = request.body.price;
        libros[modifiedbook].photo = request.body.photo;

        respuesta = {error: false, codigo: 200, 
            mensaje: "El libro se ha modificaco correctamente", data: libros[modifiedbook]}
    } else {
        respuesta = {error: true, codigo: 200,
            mensaje:"El libro no existe", data: libros}
    }

    response.send(respuesta);
}

function deleteBook(request, response){
    let  deletedbook = libros.findIndex( book => 
        book.id_book == request.body.id_book)
    
    let respuesta;
    if(deletedbook != null){
        libros.splice(deletedbook, 1);

        respuesta = { error: false, codigo: 200, 
            mensaje: "El libro ha sido eliminado", data: libros[deletedbook]};

    } else {
        respuesta = { error: true, codigo: 200, 
            mensaje: "El libro no exíste", data: libros}
    }

    response.send(respuesta);
};

module.exports = {getStart, getBook, getOneBook, postBook, putBook, deleteBook}