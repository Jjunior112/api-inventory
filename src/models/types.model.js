const mongoose = require('mongoose');

const TypesSchema = new mongoose.Schema({
    productType:{
        type: String,
        required: true
    }

})

const TypesModel = mongoose.model('type' , TypesSchema)

module.exports = TypesModel