const express=require('express');
const authRouter=express.Router();
const User=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

authRouter.post("/signup",async(req,res)=>{
    const userData=req.body;
    const{firstName,lastName,email,password}=userData;
     const passwordHash=await bcrypt.hash(password,10);
    try{
       const user=new User({
        firstName,lastName,email,password:passwordHash
       });
       user.save();
       res.send("user Signed up")
    }catch(err){

    }
})


authRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
     const user=await User.findOne({email:email});
     if(!user){
        throw new Error("Email does not exist")
     }
       const isPasswordValid=await bcrypt.compare(password,user.password);
       if(isPasswordValid){
        const token=await jwt.sign({_id:user._id},process.env.TOKEN_SECRET_KEY)
        res.cookie("token",token)
        res.send("Login Successfull")
       }
       else{
        throw new Error("Invalid Credentials")
       }
    }catch(err){

    }
})


authRouter.post("/logout",async(req,res)=>{
    res.cookie("token",null,{expires:new Date(Date.now())})
    res.send("logout Successfull")
})

module.exports=authRouter;