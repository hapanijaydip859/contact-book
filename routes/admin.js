var express = require('express');
let ADMIN = require('../model/admin');
var mobile = require('is-mobile');
var Address = require('address');
var router = express.Router();
let CA = require("../Controllers/admin")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/Create', CA.admincreate)
router.get('/Read', CA.adminread);
router.post('/login', CA.adminlogin);
router.patch('/:id', CA.adminupdate);
router.delete('/:id',CA.admindelete);
module.exports = router;
