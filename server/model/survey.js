const mongoose=require('mongoose');

const surveySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:new Date().toString()
    },
});

const Survey=mongoose.model('Survey',surveySchema);

module.exports=Survey;