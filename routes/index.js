var express = require('express');
let USERS = require('../model/user');
var mobile = require('is-mobile');
var Address = require('address');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/Create', async function (req, res, next) {
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
})
router.get('/Read', async function (req, res, next) {
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
});
router.post('/login', async function (req, res, next) {
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
});
router.patch('/:id', async function (req, res, next) {
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
});
router.delete('/:id', async function (req, res, next) {
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
});
module.exports = router;
