let mongoose = require('mongoose');
// let validate = require('validator');
let Schema = mongoose.Schema

let usercontact = new Schema({
    name: {
        type: String,
       
        
    },
    email: {
        type: String,
        
       
        // validate(value) {
        //     if (!validator.isEmail(value)) { throw new Error('invalid Email') }
        // }
    },
    mobile_1: {
        type: Number,
       
        // validate(value) {
        //     if (value.toString().length !== 10) {
        //         throw new Error('Mobile number must be 10 digits');
        //     }
        // }
    },
    mobile_2: {
        type: Number,
        
        // validate(value) {
        //     if (value.toString().length !== 10) {
        //         throw new Error('Mobile number must be 10 digits');
        //     }
        // }
    },
    Address: {
        type: String,
      
    },
    Address_office: {
        type: String,
        
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})
let CONTACT = mongoose.model('contact', usercontact)
module.exports = CONTACT;