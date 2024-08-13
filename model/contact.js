let mongoose = require('mongoose');
// let validate = require('validator');
let Schema = mongoose.Schema

let usercontact = new Schema({
    name: {
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
    mobile_1: {
        type: Number,
        min: 10,
        // validate(value) {
        //     if (value.toString().length !== 10) {
        //         throw new Error('Mobile number must be 10 digits');
        //     }
        // }
    },
    mobile_2: {
        type: Number,
        min: 10,
        // validate(value) {
        //     if (value.toString().length !== 10) {
        //         throw new Error('Mobile number must be 10 digits');
        //     }
        // }
    },
    Address: {
        type: String,
        unique: true,
    },
    Address_office: {
        type: String,
        unique: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})
let CONTACT = mongoose.model('contact', usercontact)
module.exports = CONTACT;