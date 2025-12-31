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


async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  return connection;
}

server.get('/', (req, res) => {
    res.send('Ok!');
});

server.get('/api/characters', async (req, res) =>{
    const connection = await getConnection();
    const [rows] = await connection.query(
      `SELECT * FROM characters`
    );
    res.json(rows);
});

server.get('/api/classes', async (req, res) =>{
    const connection = await getConnection();
    const [rows] = await connection.query(
      `SELECT * FROM classes`
    );
    res.json(rows);
});

server.get('/api/planets', async (req, res) =>{
    const connection = await getConnection();
    const [rows] = await connection.query(
      `SELECT * FROM planets`
    );
    res.json(rows);
});

server.get('/api/races', async (req, res) =>{
    const connection = await getConnection();
    const [rows] = await connection.query(
      `SELECT * FROM races`
    );
    res.json(rows);
});

server.get('/api/characters/:id', async (req, res) => {
  const characterId = req.params.id;

  const connection = await getConnection();
  const [rows] = await connection.query(
    `SELECT *
    FROM characters
    LEFT JOIN character_details
      ON characters.id = character_details.character_id
    WHERE characters.id = ?`,
    [characterId]
  );

  if (rows.length === 0) {
  return res.status(404).json({
    error: "Character not found"
  });
}

  res.json(rows[0]);
});