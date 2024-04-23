import React, { useState, useEffect } from 'react';
import GetEventStats from './GetEventStats';

import './GetEvent.css';
//import { json } from 'react-router-dom';
function GetEvent() {
    const [ev_id, setEv_id] = useState(null);
    const [ev_title, setEv_title] = useState(null);
    const [ev_location,setEv_location] = useState(null);
    const [events, setEvents] = useState([]); 
   
    const URL = 'https://28par060n5.execute-api.us-east-1.amazonaws.com/dev/get_event';
    
    /* 'https://iangke6k55.execute-api.us-east-1.amazonaws.com/dev/get_event'; */

    const eventClick = (e) => {
       
        const ev_id = e.event_id
        setEv_id(ev_id);
        const ev_location = e.location
        setEv_location(ev_location);
        const ev_title = e.Title
        setEv_title(ev_title);
        };

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                const data = JSON.parse(responseData.body); 
                setEvents(data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        < div>
            <div><h1>List of Events</h1></div>
            
            <div className="event-buttons">
                {events.map(e => (
                    <button className="event-button" onClick={() => eventClick(e)}>
                        {e.Date} {e.Time} {e.Title}
                    </button>
                ))}
                {ev_id && <GetEventStats ev_id={ev_id} ev_location={ev_location} ev_title={ev_title} />}
            </div>
           
        </div>
    );
}

export default GetEvent;