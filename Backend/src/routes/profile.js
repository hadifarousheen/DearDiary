const express=require('express');
const profileRouter=express.Router();
const{userAuth}=require("../middlewares/auth")

profileRouter.get("/profile",userAuth,async(req,res)=>{
    const cookies=req.cookies;
    console.log(cookies)
    res.send("profile viewed")
})


module.exports=profileRouter;