const authConfig = require('../config/auth')
const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).send({error:"no credentials provided"})
    }

    const parts = authHeader.split(' ')

    if (parts.length !== 2) {
        return res.status(401).send({error:"invalid token format"})
    }

    const [scheme, token] = parts

    if(!'Bearer' === scheme) {
        return res.status(401).send({error:"invalid token scheme"})
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({error:"invalid credentials"})

        req.userToken = decoded
        return next()
    })
};