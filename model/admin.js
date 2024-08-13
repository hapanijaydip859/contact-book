let mongoose = require('mongoose');
// let validate = require('validator');
let Schema = mongoose.Schema

let useradmin = new Schema({
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
let LOGIN = mongoose.model('login', useradmin)
module.exports = LOGIN;