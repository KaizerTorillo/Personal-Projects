import { useState } from 'react';
import './CreateEvent.css';
import { v4 as uuidv4 } from 'uuid';

function CreateEvent() {
  const current = new Date();
  const current_date = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`;
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(current_date);
  const [time, setTime] = useState("11:00");
  const [location, setLocation] = useState("Online");
  const [formdisabled, setFormdisabled] = useState(false);
  const [eventCreated, setEventCreated] = useState(false);
  
  const handleCreate = (event) => {
    event.preventDefault();
    const event_id = uuidv4();
    const new_invitation = {"event_id": event_id, "Date": date, "Time": time, "Title": title, "Location": location };
    
    const URL = 'https://28par060n5.execute-api.us-east-1.amazonaws.com/dev/create_event';
    
    /* 'https://iangke6k55.execute-api.us-east-1.amazonaws.com/dev/create_event_api'; */

    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json"
                 },
      body: JSON.stringify(new_invitation)
    }).then(() => {
      console.log('Event successfully created!');
      setEventCreated(true); 
      setFormdisabled(true)
    }).catch(error => {
      console.error('Error creating event:', error);
    });
  }

  return (
    <div>
      <form onSubmit={handleCreate}>
        <label >Date</label>
        <input type="date" name={date} value={date} onChange={(e) => setDate(e.target.value)} /><br />
        <label>Time</label>
        <input type="time" name={time} value={time} onChange={(e) => setTime(e.target.value)} /><br />
        <label>Title</label>
        <input type="text" name={title} onChange={(e) => setTitle(e.target.value)} /><br />
        <label>Location</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="Online">Online</option>
          <option value="In campus">In Campus</option>
        </select><br />
        <input type="submit" value="Save Event" disabled={formdisabled} />
      </form>

      {eventCreated && <p>Event creation success!!!</p>}
    </div>
  );
}

export default CreateEvent;