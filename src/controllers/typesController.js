const express = require('express');

const TypesModel = require('../models/types.model');

const types = express.Router()

const checkToken = require('../middleware/checkToken')

types.post('/types',checkToken, async (req,res)=>{
    try {
        const type = await TypesModel.create(req.body)

        res.status(201).json(type)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
})
types.get('/types',checkToken, async (req,res)=>{
    try {
        const type = await TypesModel.find({})

        res.status(200).json(type)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = types