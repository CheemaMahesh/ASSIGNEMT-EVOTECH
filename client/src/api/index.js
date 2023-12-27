import axios from 'axios';
//initiating base api
 const API=axios.create({ baseURL:'https://evotech-backend-xo7c.onrender.com' });

//api calls
export const form=(data)=>API.post('/',data);
export const logins=(data)=>API.get('/login',data);
export const allsurveys=()=>API.get('/allsurveys');


