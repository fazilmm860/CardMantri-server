const express=require('express');
const CreditCard=require('../models/CreditCard')

const dataPost= async(req,res)=>{
    try {
        const newCreditCard =new CreditCard({
           
            cardName:req.body.cardName,
            description:req.body.description,
            features: {
                point1: req.body.features.point1,
                point2: req.body.features.point2,
                point3: req.body.features.point3,
                point4: req.body.features.point4,
                point5: req.body.features.point5,
                point6: req.body.features.point6,
                point7: req.body.features.point7,
                point8: req.body.features.point8,
                point9: req.body.features.point9,
                point10: req.body.features.point10,
            },
           
            eligibility: {
                point1: req.body.eligibility.point1,
                point2: req.body.eligibility.point2,
                point3: req.body.eligibility.point3,
                point4: req.body.eligibility.point4,
                point5: req.body.eligibility.point5,
                point6: req.body.eligibility.point6,
                point7: req.body.eligibility.point7,
                point8: req.body.eligibility.point8,
                point9: req.body.eligibility.point9,
                point10: req.body.eligibility.point10,
            },
            document: {
                point1: req.body.document.point1,
                point2: req.body.document.point2,
                point3: req.body.document.point3,
                point4: req.body.document.point4,
                point5: req.body.document.point5,
            },
            faq: {
                point1: req.body.faq.point1,
                point2: req.body.faq.point2,
                point3: req.body.faq.point3,
                point4: req.body.faq.point4,
                point5: req.body.faq.point5,
            },
       
            faqAns: {
                point1: req.body.faqAns.point1,
                point2: req.body.faqAns.point2,
                point3: req.body.faqAns.point3,
                point4: req.body.faqAns.point4,
                point5: req.body.faqAns.point5,
            },
        })
        await newCreditCard.save()
        res.status(200).json({message:'Card Data saved successfully'})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}
const dataGet=async(req,res)=>{
    try{
        const allCreditCard=await CreditCard.find();
        
        res.status(200).json(allCreditCard)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

const specficDataGet=async(req,res)=>{
    const {cardName}=req.params
    try {
      

        const foundData=await CreditCard.findOne({cardName});

        if(!foundData){
            return res.status(404).json({message:'Card Data Not Found'});
        }
        res.status(200).json(foundData)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={dataPost,dataGet,specficDataGet}