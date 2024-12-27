var express = require('express');
var router = express.Router();
let CU = require('../Controllers/index');


router.post('/Create', CU.usercreate)
router.get('/Read', CU.sequre,CU.userread);
router.post('/login', CU.userlogin);
router.patch('/:id', CU.sequre,CU.userupdate);
router.delete('/:id',CU.sequre,CU.userdelete);
module.exports = router;
