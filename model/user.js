let mongoose = require('mongoose');
// const CONTACT = require('./contact');
// let validate = require('validator');
let Schema = mongoose.Schema

let userDatas = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) { throw new Error('invalid Email') }
        // }
    },
    password: {
        type: String,
        require: true,
        unique: true
    }
})

let USERS = mongoose.model('user', userDatas)
module.exports = USERS;