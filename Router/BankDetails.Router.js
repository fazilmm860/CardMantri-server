const express=require('express');
const { dataPost, dataGet, specficDataGet } = require('../controllers/BankDetails');

const router=express.Router()

router.post('/post',dataPost);
router.get('/getData',dataGet);
router.get('/getSpecificData/:bankName',specficDataGet)


module.exports=router;