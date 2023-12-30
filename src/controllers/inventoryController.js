const express = require('express')

const InventoryModel = require('../models/inventory.model')

const inventory = express.Router()

const checkToken = require('../middleware/checkToken')


inventory.post('/inventory', checkToken, async (req, res) => {
    try {
        const inventory = await InventoryModel.create(req.body)

        res.status(201).json(inventory)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

inventory.get('/inventory',checkToken, async (req, res) => {
    try {
        const inventory = await InventoryModel.find({})

        res.status(200).json(inventory)

    } catch (error) {
        res.status(500).send(error.message)
    }
})
inventory.get('/inventory/:id',checkToken, async (req, res) => {
    try {
        const id = req.params.id

        const inventory = await InventoryModel.findById(id)

        res.status(200).json(inventory)

    } catch (error) {
        res.status(500).send(error.message)
    }
})
inventory.delete('/inventory/:id',checkToken, async (req, res) => {
    try {
        const id = req.params.id

        const inventory = await InventoryModel.findByIdAndDelete(id)

        res.status(200).json(inventory)

    } catch (error) {
        res.status(500).send(error.message)
    }
})
inventory.patch('/inventory/:id',checkToken, async (req, res) => {
    try {
        const id = req.params.id

        const inventory = await InventoryModel.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json(inventory)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = inventory

