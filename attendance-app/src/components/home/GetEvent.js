import { useState, useEffect } from 'react';
import './GetEvent.css';
function GetEvent() {
    const [events, setEvents] = useState([]); 
    const URL = 'https://28par060n5.execute-api.us-east-1.amazonaws.com/dev/get_event';
    
    /* 'https://iangke6k55.execute-api.us-east-1.amazonaws.com/dev/get_event'; */

    const eventClick = (event) => {
        alert(event.event_id);
        
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
        <div className='wrapper'>
            <div><h1>List of Events</h1></div>
            
            <div className="event-buttons">
                {events.map((event, index) => (
                    <button key={index} className="event-button" onClick={() => eventClick(event)}>
                        {event.Date} {event.Time} {event.Title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default GetEvent;