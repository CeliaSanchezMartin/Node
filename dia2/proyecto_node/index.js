let read = require("./readConsole");
let write = require("./writeAndReadObject");

read.readConsole(function(obj){
    write.writeAndRead("person.json", obj)
})