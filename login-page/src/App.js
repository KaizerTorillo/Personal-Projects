import './App.css';
import React from 'react';
import {FaUser, FaLock} from "react-icons/fa";

function App() {
  return (
    <div className="wrapper">
      <div>Image</div>
      <span className='sign-in'>
        <form action="">
          <h1>Sign in as a user</h1>
          <div className='input-box'>
            <p>Username</p>
            <input type = "text" placeholder='john@gmail.com' required/>
            <FaUser className='icon'/>
          </div>

          <div className='input-box'>
            <p>Password</p>
            <input type='password' placeholder='*****' required/>
            <FaLock className='icon'/>
          </div>

          <button type='submit'>Log In</button>
          
        </form>
      </span>
    </div>
  );
}

export default App;
