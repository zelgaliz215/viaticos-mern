require('dotenv').config({path: 'variables.env'})

const express = require('express')
const app = express();

const cors = require('cors')

//DEFINE E IMPORTA EL SERVIDOR EXPRESS
//SETTINGS -- CONFIGURACIONES DEL SERVIDOR
const PORT = process.env.PORT || 4000;
 app.set('port', PORT)

//MIDDLEWARES -- FUNCIONES QUE MANEJAN LAS RUTAS
app.use(cors());
app.use(express.json({ extended: true }))

//ROUTES -- RUTAS IMPORTADAS
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))


module.exports = app;