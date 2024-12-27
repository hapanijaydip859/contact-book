let ADMIN = require('../model/admin');
let jwt = require('jsonwebtoken')

exports.admincreate =  async function (req, res, next) {
  
    try {
      
      // console.log(req.file.filename);
      
      req.body.profile = req.file.filename
      let userCreate = await ADMIN.create(req.body)
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

  exports.adminread = async function (req, res, next) {
    try {
      let userFound = await ADMIN.find()
      console.log(userFound,"0000");
      
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

  exports.adminlogin =  async function (req, res, next) {
    
    try {
      let userLogin = await ADMIN.findOne({ email: req.body.email })
      let userPassword = await ADMIN.findOne({ password: req.body.password })
      console.log(userLogin,userPassword,"}}}}}");
      
      // let passwordc = await bcrypt.compare(password,userLogin.password)
  
      if (!userLogin) {
        throw new Error("User Not Found!")
      }
      if (!userPassword) {
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

  exports.adminupdate = async function (req, res, next) {
    try {
      console.log(req.body);
  
      let usercontact = await ADMIN.findByIdAndUpdate(req.params.id, req.body, { new: true })
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

exports.admindelete = async function (req, res, next) {
    try {
  
      let userDelete = await ADMIN.findByIdAndDelete(req.params.id)
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