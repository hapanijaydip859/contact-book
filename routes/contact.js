var express = require('express');
let CONTACT = require('../model/contact');

var router = express.Router();
let CC = require("../Controllers/contact")

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/Create', CC.ContactCreate)
router.get('/Read', CC.ContactRead );
router.patch('/:id', CC.contactupdate );
router.delete('/:id', CC.contactdelete);
module.exports = router;
