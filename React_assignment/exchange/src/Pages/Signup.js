import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import Axios from 'axios'




const Signup = () => {



        const [name, setName] = useState("");
        const [password, setPassword] = useState("");
        const [status,setStatus]=useState("");


        const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3001/signup',{user_name:name,password:password})
        .then((res)=>{
          if(res.data.message){
            console.log(res)
            setStatus(res.data.message)
          }
          if(res.data.msg){
            window.location.replace("/login");
          }
        });

      }
        return (
        <>
        <div id="box">
          <h1>Signup Page</h1>

          <h3>{status}</h3>

           <form onSubmit={handleSubmit} method="POST">
              <input 
                type="text" 
                name="user_name"
                value={name}
                id="name"
                placeholder='Enter Username'
                onChange={(e) => setName(e.target.value)}
              /> <br/>
              <input 
                type="password" 
                name="password"
                value={password}
                id="password"
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
              /> <br/>
            <input type="submit" id="submit" disabled={!name || !password} />
          </form>
        <div id="link">
        <span>Already ?Have an Account ??</span>
        <Link href="login" to="/login" >&nbsp;&nbsp; Login</Link>
        </div>
        
        </div>
        </>
        
        );
      }

export default Signup
