import React from 'react'
import {Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>No Page Found</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Error
