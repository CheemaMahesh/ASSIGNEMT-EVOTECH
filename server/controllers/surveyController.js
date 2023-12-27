const Survey=require('../model/survey');


//====================CONTROLLER FOR ADD DATA TO THE DATABASE
module.exports.surveyController=async (req,res)=>{
    try{
        const {name, gender, nationality, email, phoneNumber, address, message}=req.body;
        const existUser=await Survey.findOne({email});
        if(existUser){
            return res.status(202).json({message:"response already exists TRY with new email",status:"already exists"});
        }else{
             await Survey.create({
                name, gender, nationality, email, phoneNumber, address, message
            })
            return res.status(200).json({message:" survey submitted successfully ", status:"success"})
        }
    }catch(err){
        return res.status(401).json({message:` something went wrong Try again :) !` ,status:"failed"})
    }
    
}

//===================================CONTROLLER FOR LOGIN
module.exports.login=async (req,res)=>{
    try{
        const {email,password}=req.body;
            return res.status(200).json({message:'Log in Successful', status:'success'})
    }catch(err){
        console.log(err)
            return res.status(400).json({message:'Error was generated', status:'failed'})
    }
}


//=====================CONTROLLER TO GET ALL PREVIOUS RESPONSES
module.exports.getsurveys=async(req,res)=>{
   try{
    const surveyData=await Survey.find()
        return res.status(200).json({surveyData})
   }catch(err){
    return res.status(404).json({message:'somthing went wrong!!'})
   } 
}