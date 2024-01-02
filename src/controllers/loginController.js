const express = require('express');

const login = express.Router();

login.use(express.json());

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const UserModel = require('../models/User.model');

const InvalidToken = require('../models/InvalidToken.model');

const checkToken = require('../middleware/checkToken');


login.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório" })
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória" })
    }
    const user = await UserModel.findOne({ email: email })

    if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado" })
    }
    // check password

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
        return res.status(422).json({ msg: 'Senha inválida' })
    }

    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: user._id

        }, secret, { expiresIn: process.env.TIME_EXPIRATION_TOKEN })

        res.status(200).json({ msg: 'autenticação realizada com sucesso', token })
    } catch (error) {
        res.status(404).send(error.message)
    }
})

login.post('/logout', checkToken, async (req, res) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    const setInvalidToken = await InvalidToken.create({
        InvalidToken: token
    })

    res.json({ message: 'logout efetuado com sucesso!' }).end()

})
module.exports = login 