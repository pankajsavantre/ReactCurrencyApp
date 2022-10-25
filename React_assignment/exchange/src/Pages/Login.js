import React, { useState } from 'react'
import {Link,Navigate,Route } from "react-router-dom";
import Home from './Home';
import '../App.css'

import Axios from 'axios'
const Login = () => {
        const [name, setName] = useState("");
        const [password, setPassword] = useState("");

        const [status,setStatus]=useState("");
      
        const handleSubmit = (event) => {
        event.preventDefault();

        Axios.post('http://localhost:3001/login',
        {
        user_name:name,
        password:password,
       })
        .then((res)=>{
          
            if(res.data.message){
              setStatus(res.data.message)
            }else{
              setStatus(res.data[0].user_name);
              window.sessionStorage.setItem("user_name",res.data[0].user_name);
              window.location.replace("/currency");
            }
        });
      }
        return (
        <>
          <div id="box">
          <h1>Login Page</h1>

            <h3>{status}</h3>

            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="user_name"
                value={name}
                placeholder="Enter Username"
                onChange={(e) => setName(e.target.value)}
              /> <br/>
              <input 
                type="password" 
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              /> <br/>
            <input type="submit" disabled={!name || !password} />
          </form>
          <div id="link">
            <span>Don't Have an Account ??</span>
            <Link href="signup" to="/signup" >&nbsp;&nbsp; Signup</Link>
          </div>

          </div>

          
        </>
        );
      }

export default Login
