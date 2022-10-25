import React from 'react'
import {Link } from "react-router-dom";
import '../home.css'
const Home = () => {
  return (
    <div>
        <div id="box">
        <h1>Home Page</h1>
        <Link to="signup" id="link">* Create Account</Link> <br/>
        <Link to="login" id="link">* User Login</Link>
        </div>
    </div>
  )
}

export default Home
