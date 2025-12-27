// Importar la biblioteca de Express
const express = require('express');

// Importar la biblioteca de CORS
const cors = require('cors');

// Impportar biblioteca de mysql2
const mysql = require("mysql2/promise");
const path = require('node:path');

require('dotenv').config();

// Crear una variable con todo lo que puede hacer el servidor:
const server = express();

// Configuramos server para que funcione bien como API
server.use(cors());
server.use(express.json({ limit: '25Mb' }));

// Arrancar el servidor en el puerto 3000:
const port = 3000;
server.listen(port, () => {
  console.log(`Uh! El servidor ya está arrancado: <http://localhost:${port}/>`);
});

/*async function getConection() {
    host: 'localhost'
    port: 3306
    database: 'me-codex'
    user: 'root'
    password: process.env.MYSQL_PASSWORD
};*/

server.get('/', (req, res) => {
    req.setEncoding('Ok!');
});

server.get('/api/mass-effect', async (req, res) =>{
    

    
})