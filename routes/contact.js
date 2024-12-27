var express = require('express');
let CC = require("../Controllers/contact")
let CU = require('../Controllers/index');
var router = express.Router();

router.post('/Create',CC.ContactCreate)
router.get('/Read',CU.sequre,CC.ContactRead);
router.patch('/:id',CU.sequre,CC.contactupdate);
router.delete('/:id',CU.sequre,CC.contactdelete);
module.exports = router;
