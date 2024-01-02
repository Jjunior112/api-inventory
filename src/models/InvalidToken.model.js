const mongoose = require('mongoose');

const InvalidTokenSchema = new mongoose.Schema({
    InvalidToken:{
        type: String,
        required: true
    }

})

const InvalidTokenModel = mongoose.model('invalidToken' , InvalidTokenSchema)

module.exports = InvalidTokenModel