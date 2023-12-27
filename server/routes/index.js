const express=require('express');

const {surveyController,login,getsurveys}=require('../controllers/surveyController');

const router=express.Router();

//==================ROUTES FOR APIS
router.post('/',surveyController);
router.get('/login',login);
router.get('/allsurveys',getsurveys)

module.exports=router;