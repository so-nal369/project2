import React from "react";
import main from "./images/main.jpg"
import Navbar from "./Navbar";
import {Link, useNavigate} from "react-router-dom"
import {useState} from 'react'
import { Navigate } from "react-router-dom";

const Signup=()=>
{

    const userDetail={
        name:"",
        email:"",
        password:""

    }
    const[data,setData]=useState(userDetail);
    const navigate=useNavigate;
    const handleInput=(event)=>
    {
        const name=event.target.name;
        const value=event.target.value;
      setData({...data,[name]:value})
    }
   const handleSubmit=(e)=>
   {
    e.preventDefault();

    
 if(data.email == "" || data.name == "" || data.password == ""){
            alert("Please Enter Detail!")
        }else{
   // 1. Pehle se stored users ko lao (agar na ho to empty array)
let oldUsers = JSON.parse(localStorage.getItem("user") || "[]");

// 2. Naye user ko old users ke array me add karo
oldUsers.push(data);

// 3. Updated array ko wapas localStorage me save karo
localStorage.setItem("user", JSON.stringify(oldUsers));
 alert("SignUp Successfully")
            navigate("/login")

   }
}
  
    return(
        <div className="signuppage">
            
          <Navbar/>
            <div className="heading">
                <h2 className="header">Sign up !!</h2>
            </div>
            <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="enter name" onChange={handleInput}/><br/>
             <input type="email" name='email' placeholder="enter email"onChange={handleInput}/><br/>
              <input type="password" name='password'placeholder="enter password"onChange={handleInput}/><br/>
              <p>Already have an account</p><Link to="/login">Login</Link>
<br/>
<br/>
              <button className="button">Signup</button>
 </form>
<div className="image">
 <img src={main} alt="photo"/>
 </div>
        </div>
    )
}
export default Signup;