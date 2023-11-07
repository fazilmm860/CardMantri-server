const express=require('express');
const { dataPost, dataGet, specficDataGet } = require('../controllers/CreditCard');

const router=express.Router()

router.post('/postcreditcard',dataPost);
router.get('/getcreditcard',dataGet);
router.get('/getSpecificreditcard/:bankName',specficDataGet)


module.exports=router;