const express=require('express');
const app=express();
const connectDB=require("./config/database")
const User=require("./models/user")
app.use(express.json())
require('dotenv').config();
const authRouter=require('./routes/auth');
const profileRouter=require('./routes/profile')
const cookieParser=require("cookie-parser")
app.use(cookieParser())

app.use("/",authRouter)
app.use("/",profileRouter)

    












connectDB().then(()=>{
app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})
}).catch(()=>{
    console.log("Cannot connect to database")
})
