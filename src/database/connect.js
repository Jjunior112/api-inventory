const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.82h7opu.mongodb.net/database?retryWrites=true&w=majority`)

        console.log('Conectado ao banco de dados com sucesso! ');

    } catch (error) {
        console.log('falha na conexão')
    }
}

module.exports = connectToDatabase;