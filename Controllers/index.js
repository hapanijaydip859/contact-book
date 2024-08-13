let USERS = require('../model/user');

exports.usercreate =  async function (req, res, next) {
    let conformpassword = req.body.conformpassword
    let password = req.body.password
    try {
  
      if (conformpassword == password) {
  
        let userCreate = await USERS.create(req.body)
        //   console.log(userCreate);
        res.status(201).json({
          status: "Success",
          message: "user Create Successfull",
          data: userCreate
        })
      } else {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
  
      }
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  }

  exports.userread = async function (req, res, next) {
    try {
      let userFound = await USERS.find()
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

  exports.userlogin = async function (req, res, next) {
    let { password } = req.body
    try {
      let userLogin = await USERS.findOne({ email: req.body.email })
      let userPassword = await USERS.findOne({ password: req.body.password })
      //let passwordc = await bcrypt.compare(password,userLogin.password)
  
      if (!userLogin) {
        throw new Error("User Not Found!")
      }
      if (!password) {
        throw new Error("wrong password")
      }
      res.status(200).json({
        status: "Success",
        message: "user login Successfull",
        data: userLogin
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  }

  exports.userupdate = async function (req, res, next) {
    try {
      console.log(req.body);
  
      let usercontact = await USERS.findByIdAndUpdate(req.params.id, req.body, { new: true })
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

  exports.userdelete =  async function (req, res, next) {
    try {
  
      let userDelete = await USERS.findByIdAndDelete(req.params.id)
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