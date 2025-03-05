const express = require('express');
const UserRouter = express.Router();
const uploadUserImage = require('../middlewares/multer');
const UserModal = require("../models/UserModal");

UserRouter.post("/signup",uploadUserImage.single('profilePic'),async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).send({message:"All fileds are required"});
        }
        const user = UserModal.findOne({email});
        if(user){
            return res.status(400).send({message:"User already exists"});
        }
    }catch(error){
        res.status(500).send({message:error.message});
    }
});

UserModal.post("/login",async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).send({message:"All fileds are required"});
        }
        const user = UserModal.findOne({email});
        if(!user){
            return res.status(400).send({message:"User does not exists"});  
    }}catch(error){
        res.status(500).send({message:error.message});
    });
