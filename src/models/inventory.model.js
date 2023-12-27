const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productDescription:{
        type: String,
        required: true
    },
    productType:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true  
    }

})

const InventoryModel = mongoose.model('inventory' , InventorySchema)

module.exports = InventoryModel

