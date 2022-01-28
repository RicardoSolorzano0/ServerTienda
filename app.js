//importamos las dependencias que necesitamos para pdoer trabajar

const express = require("express");
const bodyParser = require("body-parser");

//usaremos expres
const app = express();
const { API_VERSION } = require("./config");

//cargaremos rutas

//lo trabajaremos mas adelante
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configure header http

//router basic


//exportamos las configuraciones que necesitamos
module.exports = app;