const express=require('express');
const { dataPost, dataGet, specficDataGet } = require('../contollers/Data');

const router=express.Router()

router.post('/post',dataPost);
router.get('/getData',dataGet);
router.get('/getSpecificData/:cardName',specficDataGet)


module.exports=router;