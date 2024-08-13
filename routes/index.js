var express = require('express');
let USERS = require('../model/user');
var mobile = require('is-mobile');
var Address = require('address');
var router = express.Router();
let CU = require('../Controllers/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/Create', CU.usercreate)
router.get('/Read', CU.userread);
router.post('/login', CU.userlogin);
router.patch('/:id', CU.userupdate);
router.delete('/:id',CU.userdelete);
module.exports = router;
