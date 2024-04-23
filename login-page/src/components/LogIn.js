import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import "./SignUp.css"
import {FaUser, FaLock} from "react-icons/fa";
import HomePage from "./home/HomePage";


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { authenticate } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email,password)
          .then(data => {
            console.log("Logged in!", data);
          })
          .catch((err) => {
            console.error("Failed to login", err);
          });
    };



  return (
    <div className="wrapper">
      <div>Image</div>
      <span className='sign-in'>
        <form onSubmit={onSubmit}>
          <h1>Log In</h1>
          <div className='input-box'>
            <label htmlFor="email"><p>Username</p></label>
            <input 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} type = "text" placeholder='example@gmail.com' required/>
            <FaUser className='icon'/>
          </div>

          <div className='input-box'>
            <label htmlFor="password"><p>Password</p></label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type='password' placeholder='*****' required/>
            <FaLock className='icon'/>
          </div>

          <button type='submit'>Log In</button>
          
        </form>
      </span>
    </div>
  );
}

export default LogIn;