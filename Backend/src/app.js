const express=require('express');
const app=express();
const connectDB=require("./config/database")
const User=require("./models/user")
app.use(express.json())
require('dotenv').config();

app.post("/signup",async(req,res)=>{
    console.log(req.body)
    const userObj={
        firstName:"Hadifa",
        lastName:"Rousheen",
        email:"hadifarousheen2644@gmail.com"
    }
    const user= new User(req.body)
    try{
        await user.save();
        res.send("User Added")
    }catch(err){
        console.log("error")
    }

})

   





connectDB().then(()=>{
app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})
}).catch(()=>{
    console.log("Cannot connect to database")
})
