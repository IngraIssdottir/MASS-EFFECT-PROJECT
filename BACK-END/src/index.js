// Importar la biblioteca de Express
const express = require('express');

// Importar la biblioteca de CORS
const cors = require('cors');

// Impportar biblioteca de mysql2
/*const mysql = require("mysql2/promise");
const path = require('node:path');

require('dotenv').config();*/

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

const characters = [
  {
    characterId: 0,
    name: "Commander Shepard",
    gender: "Female/Male",
    race: "Human",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJw7yivIx9SU6dVshPN1L8h-J-tGcZNGvNw&s",
  },
  {
    characterId: 1,
    name: "Garrus Vakarian",
    gender: "Male",
    race: "Turian",
    img: "https://static.wikia.nocookie.net/masseffect/images/3/36/Garrus_Character_Shot.png",
  },
  {
    characterId: 2,
    name: "Tali'Zorah nar Rayya",
    gender: "Female",
    race: "Quarian",
    img: "https://static.wikia.nocookie.net/masseffect/images/2/2f/Talicharactershotme2.jpg",
  },
  {
    characterId: 3,
    name: "Legion",
    gender: "A.I.",
    race: "Geth",
    img: "https://static.wikia.nocookie.net/masseffect/images/2/25/Legion.png",
  },
];


/*async function getConection() {
    host: 'localhost'
    port: 3306
    database: 'me-codex'
    user: 'root'
    password: process.env.MYSQL_PASSWORD
};*/

server.get('/', (req, res) => {
    req.send('Ok!');
});

server.get('/api/characters', (req, res) =>{
    res.json(characters);

    
})