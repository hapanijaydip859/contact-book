let CONTACT = require('../model/contact');
var jwt = require('jsonwebtoken');


exports.ContactCreate = async function (req, res, next) {
    try {
        let userCreate = (await CONTACT.create(req.body))
        //   console.log(userCreate);
        res.status(201).json({
          status: "Success",
          message: "user Create Successfull",
          data: userCreate
        })
      } 
     catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  }

  exports.ContactRead = async function (req, res, next) {
    try { 
        let token = req.headers.authorization
        if (!token) { 
          throw new Error("Please Attach token")
        }
        console.log(token,"tt");
      var decoded = jwt.verify(token, 'Surat')
      console.log(decoded,"fdge");   
        let userFound = await CONTACT.find({'userID' : decoded.id}).populate("userID")
        console.log(userFound,"ss");
        // if(userFound == []){
        //     throw new error("user not found")
        // }
        res.status(200).json({
            status: "Success",
            message: "user Found Successfull",
            data: userFound
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
exports.contactupdate = async function (req, res, next) {
    try {

        let usercontact = await CONTACT.findByIdAndUpdate()
        console.log(usercontact);

        res.status(200).json({
            status: "Success",
            message: "user update Successfull",
            data: usercontact
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
exports.contactdelete = async function (req, res, next) {
    try {

        let userDelete = await CONTACT.findByIdAndDelete()
        if (!userDelete) {
            throw new Error('user not found');
        }
        res.status(200).json({
            status: "Success",
            message: "user delete Successfull",
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}