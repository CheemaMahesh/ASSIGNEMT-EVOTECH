import React ,{useState} from "react";
import Login from './Login';
import Table from './Table';

// all forms and login wrapper
export default function Pagecontroller({setIsLogin}){
    const [user,setUser]=useState(false);
    return(
        <>
              {user?<Table setUser={setUser} setIsLogin={setIsLogin}/>:<Login setUser={setUser} setIsLogin={setIsLogin}/>}
        </>
    )
}