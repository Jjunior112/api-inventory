const jwt = require('jsonwebtoken')

const InvalidToken = require('../models/InvalidToken.model');

const checkToken = async (req, res, next) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    const validationToken = await InvalidToken.findOne({ InvalidToken: token })

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado" })
    }

    try {
        
        
        if (!validationToken) {

            const secret = process.env.SECRET
            jwt.verify(token, secret)
            next()

        }
        else {
            return res.status(401).json({ msg: "Token inválido ou expirado" })
        }
    } catch (error) {
        res.status(400).send({ msg: "Erro na autenticação, refaça o login " })
    }


}

module.exports = checkToken