const express = require('express')

const inventory = express.Router()

inventory.get('/inventory',(req,res)=>{
    try {
        res.status(200).json('...')
    } catch (error) {
        res.status(500).send(error.message)
    }
})
inventory.get('/inventory/:id',(req,res)=>{
    try {
        const id = req.params.id

        res.status(200).json('...')
    } catch (error) {
        res.status(500).send(error.message)
    }
})
inventory.get('/inventory/:product',(req,res)=>{
    try {
        const product = req.params.product

        res.status(200).json('...')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = inventory

