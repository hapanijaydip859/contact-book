var express = require('express');
let CONTACT = require('../model/contact');
var mobile = require('is-mobile');
var Address = require('address');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/Create', async function (req, res, next) {

  try {
    console.log(req.body);
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
})
router.get('/Read', async function (req, res, next) {
  try {
 
    
    let userFound = await CONTACT.find()
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
});
router.patch('/:id', async function (req, res, next) {
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
});
router.delete('/:id', async function (req, res, next) {
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
});
module.exports = router;
