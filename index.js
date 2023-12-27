require('dotenv').config()

const express = require('express');

const server = express();

const routes = require('./src/routes/routes')

const connectToDatabase = require('./src/database/connect');

connectToDatabase()

server.use(routes)

server.use(express.json());

server.listen(process.env.PORT,()=>{
    console.log(`rodando na porta ${process.env.PORT} `)
})

