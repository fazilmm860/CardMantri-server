const mongoose=require('mongoose')

const bankDetails=mongoose.Schema({

    bankName:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    features:{
        type:String,
    },
    cards:{
        type:String,
    },
    benfits:{
        type:String,
    },
})
const BankDetails=mongoose.model('bankDetails',bankDetails);
module.exports=BankDetails;