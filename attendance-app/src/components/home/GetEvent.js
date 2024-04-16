import { useState, useEffect } from 'react';
import './GetEvent.css';
function GetEvent() {
    const [events, setEvents] = useState([]); 
    const URL = 'https://iangke6k55.execute-api.us-east-1.amazonaws.com/dev/get_event';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                const data = JSON.parse(responseData.body); // Parse the body string from the response
                setEvents(data); // Set the events state to the parsed array
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div><h1 className='title'>List of Events</h1></div>
            
            <div className="event-buttons">
                {events.map((event, index) => (
                    <button key={index} className="event-button">
                        {event.Date} {event.Time} {event.Title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default GetEvent;