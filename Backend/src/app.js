const express=require('express');
const app=express();
const connectDB=require("./config/database")
const User=require("./models/user")
app.use(express.json())
require('dotenv').config();
const authRouter=require('./routes/auth');


app.use("/",authRouter)


    












connectDB().then(()=>{
app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})
}).catch(()=>{
    console.log("Cannot connect to database")
})
