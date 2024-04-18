import React from "react";
import { Link } from "react-router-dom";
import "./attendance.css"

function ConfirmAttendance() {
    return (
        <div className="confirmation">
            <div className="message-box">
                <div className="message">Please indicate whether you are able to attend.</div>
            </div>
            <div className="button-box">
                <Link to="/accept"><button className="confirmation-button">Confirm</button></Link>
                <Link to="/decline"><button className="confirmation-button">Decline</button></Link>
            </div>
        </div>
    );

}

export default ConfirmAttendance;