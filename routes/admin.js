var express = require('express');
let CA = require("../Controllers/admin")
let CU = require("../Controllers/index")
var router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  

router.post('/Create',upload.single("profile"), CA.admincreate)
router.get('/Read', CU.sequre, CA.adminread);
router.post('/login', CU.sequre,CA.adminlogin);
router.patch('/:id', CU.sequre, CA.adminupdate);
router.delete('/:id', CU.sequre, CA.admindelete);
module.exports = router;
