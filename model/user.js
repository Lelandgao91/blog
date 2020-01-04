const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = { User }