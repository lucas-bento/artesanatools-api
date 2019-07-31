const express = require('express')
const User = require('../user/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')


class AuthenticationController {
    constructor() {
        this.router = express.Router()


        this.router.post('', async (req, res) => {
            const {email, password} = req.body
        
            if(!email || !password) {
                return res.status(400).send({error:'email and password are required'})
            }
        
            const user = await User.findOne({email: email}).select('+password')
        
            if(!user) {
                return res.status(400).send({error: 'not found'})
            }
        
            if(!await bcrypt.compare(password, user.password)) {
                return res.status(400).send({error: 'invalid password'})
            }
            
            user.password = undefined
            const token = jwt.sign({name:user.name, email:user.email, id:user.id, admin:user.admin}, 
                                   authConfig.secret,
                                   { expiresIn:86400})
            user.token = token
        
        
            return res.send({user, token})
        })

        this.register = (path, app) => app.use(path, this.router)
    }
}


module.exports = AuthenticationController