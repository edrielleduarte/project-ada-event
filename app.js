require("dotenv").config();
const express = require('express')
const useController = require('./controllers/controller');
const db = require('./db');
const port = 8080;

//Conexão do banco de dados
db.connect()

const app = express()
app.use(express.json());
app.use(useController);


app.listen(port, () => {
    console.log('Servidor sendo executado na porta', port)
})