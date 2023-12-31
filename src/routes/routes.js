const express = require('express');

const inventory = require('../controllers/inventoryController');

const register = require('../controllers/registerController');

const login = require('../controllers/loginController');

const types = require('../controllers/typesController');

const routes = express.Router()

routes.use(express.json())

//rota de registro de usuário

routes.use(register)

//rota de login

routes.use(login)

// rota de tela principal

routes.use(inventory);

//rota de tipos

routes.use(types); 

module.exports = routes

