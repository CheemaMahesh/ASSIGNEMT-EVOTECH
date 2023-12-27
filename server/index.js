const express=require('express');
const app=express();
const PORT=8000;
const cors=require('cors')


app.use(express.json({
    limit:'30mb',
    extended:true
}))
app.use(express.urlencoded({
    limit:'30mb',
    extended:true
}))
app.use(cors());



app.use('/',require('./routes'));


const mongoose=require('mongoose');

//MONGODB CONNECT URL( You must change it to add data to your MONGODB ATLAs )(Replace your mongodb atlas USERNAME and PASSWORD)
const CONNECT_URL='mongodb+srv://<USERNAME>:<PASSWORD>@evotech.dnf4ajd.mongodb.net/?retryWrites=true&w=majority';


mongoose.set('strictQuery',false);


//MONGOOSE CONNECTION AND SERVER INITIALIZATIONS
mongoose.connect(CONNECT_URL)
.then(()=> app.listen(PORT,()=>{
    console.log("mongoose connected and server is up running on port",PORT);
})).catch((err)=>{
    console.log(err)
});



