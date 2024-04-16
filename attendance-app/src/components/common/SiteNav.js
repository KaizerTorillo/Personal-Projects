import React from "react";
import {Link } from "react-router-dom";
import "./home.css"


function SiteNav(props) {
    const handleLogOut = () => {
        props.logOut();
    }

    return (
    <div className="nav">
      <div className="topbox"></div>
      <Link to="/home"><button className="nav-button">Home</button></Link>
      <Link to="/events"><button className="nav-button">Your Events</button></Link>
      <Link to="/create-event"><button className="nav-button">Create Event</button></Link>
      <Link to="/attendance"><button className="nav-button">Attendance</button></Link>
      <Link to="/profile"><button className="nav-button">Profile</button></Link>
      <a><button onClick={handleLogOut} className="nav-button">LogOut</button></a>
    </div>
    );
}

export default SiteNav;