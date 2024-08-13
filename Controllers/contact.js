let CONTACT = require('../model/contact');

exports.ContactCreate = async function (req, res, next) {

    try {
    
        let userCreate = await CONTACT.create(req.body)
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

  exports.ContactRead =async function (req, res, next) {
    try {


        let userFound = await CONTACT.find().populate("userID")
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

        let usercontact = await CONTACT.findByIdAndUpdate(req.params.id, req.body, { new: true })
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

        let userDelete = await CONTACT.findByIdAndDelete(req.params.id)
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