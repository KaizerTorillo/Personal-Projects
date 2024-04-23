import './App.css';
import React from 'react';
import SignUp from "./components/SignUp.js";
import LogIn from "./components/LogIn.js"
import { Account } from './components/Account.js';
import { Route, Routes} from "react-router-dom";

import SiteHeader from "./components/common/SiteHeader";
import SiteNav from './components/common/SiteNav';


import HomePage from './components/home/HomePage';
import ThankYou from "./components/home/ThankYou";
import Decline from "./components/home/Decline";
import CreateEvent from "./components/home/CreateEvent";
import GetEvent from "./components/home/GetEvent";

const App = () => {
  return (
    <Account>
      <Status />
      <SignUp />
      <LogIn />
      <div className="parent">
            <div className="top" >
              <SiteHeader />
            </div>
            <div className="wrapper">
              <div className="side">
                <SiteNav logOut={signOut}/>
              </div>
            </div>
            <div className="content">
                <Routes>
                  <Route path="*" element={<HomePage />} />
                  <Route path="/" exact={true} element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/accept" element={<ThankYou />} />
                  <Route path="/decline" element={<Decline />} />
                  <Route path="/create-event" element={<CreateEvent />} />
                  <Route path="/events" element={<GetEvent />} />
                </Routes>
            </div>
          </div>
    </Account>
  );
}

export default App;
