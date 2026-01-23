const express=require('express');
const app=express();

app.use("/test",(req,res)=>{
    res.send("Testing...")
})

app.use((req,res)=>{
    res.send("Hello server")
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})