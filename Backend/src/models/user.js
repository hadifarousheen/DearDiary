const mongoose=require('mongoose');
const validator=require('validator')
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address")
            }
        }
    },
    password:{
        type:String,
        required:true
    }
},{timeStamps:true})

const UserModel=mongoose.model("User",userSchema);
module.exports=UserModel;