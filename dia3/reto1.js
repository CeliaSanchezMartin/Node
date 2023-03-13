//Reto 1.
const { response, application, json } = require("express");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    console.log("Request Recived from client on the express server");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.contentType("application/json");
    res.status(200).send( {ok: true, message: "Recibido!"})
});



// app.get("/adios", function(req, res) {
//     console.log("Request recived from client on the express server");
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers["user-agent"]);
//     res.contentType("application/json");
//     res.status(200).send({ok: true, message : "Adios!" })
// })

app.listen(3000);