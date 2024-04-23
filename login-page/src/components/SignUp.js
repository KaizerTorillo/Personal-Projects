import React, { useState } from "react";
import UserPool from "../UserPool";
import "./SignUp.css"
import {FaUser, FaLock} from "react-icons/fa";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);
        });
    };



  return (
    <div className="wrapper">
      <div>Image</div>
      <span className='sign-in'>
        <form onSubmit={onSubmit}>
          <h1>Sign up as a new user</h1>
          <div className='input-box'>
            <label htmlFor="email"><p>Username</p></label>
            <input 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} type = "text" placeholder='john@gmail.com' required/>
            <FaUser className='icon'/>
          </div>

          <div className='input-box'>
            <label htmlFor="password"><p>Password</p></label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type='password' placeholder='*****' required/>
            <FaLock className='icon'/>
          </div>

          <button type='submit'>Sign Up</button>
          
        </form>
      </span>
    </div>
  );
}

export default SignUp;