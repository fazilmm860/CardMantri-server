    const express=require('express');
    const CreditCard=require('../models/CreditCard')

    const dataPost= async(req,res)=>{
        try {
            const newCreditCard =new CreditCard({
                cardName:req.body.cardName,
                catergory:req.body.catergory,
                description:req.body.description,
                img:req.body.img,
                features: req.body.features,
                eligibility: req.body.eligibility,
                document:req.body.document,
                charge:req.body.charge,
                faq:req.body.faq,       
                faqAns: req.body.faqAns
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