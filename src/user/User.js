const mongoose = require("../database")
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    admin: {
        type: Boolean,
        required: true,
        default: false,
    },
});


UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

UserSchema.pre('update', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})


const User = mongoose.model("User", UserSchema)

module.exports = User