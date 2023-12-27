const express = require('express');

const inventory = require('../controllers/inventoryController');

const routes = express.Router()

routes.use(express.json())

// rota de tela principal

routes.use(inventory);

module.exports = routes

