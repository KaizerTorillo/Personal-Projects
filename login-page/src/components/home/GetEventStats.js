import React, { useState, useEffect } from 'react';


import './GetEventStats.css';

function GetEventStats({ ev_id,ev_location,ev_title }) {
    const [stats, setStats] = useState([]);
    




    const URL = 'https://28par060n5.execute-api.us-east-1.amazonaws.com/dev/get_event_stats?ev_id=' + ev_id;

    /* 
    'https://iangke6k55.execute-api.us-east-1.amazonaws.com/dev/get_event'; */


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await fetch(URL);
                if (!response1.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response1.json();
                const data = responseData;
                setStats(data);
                alert(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [ev_id, URL]);

    return (
        < div>

            <div className="heading1">
                <h1>Event Statistics</h1>
                <p>Event Name: {ev_title}</p>
            </div>
            <div>
                {stats.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Attending</th>
                            <th>Location</th>
                            <th>Coffee Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.map(val => (
                            <tr  >
                                <td>{val.student_id}</td>
                                <td>John</td>
                                <td>{val.attending}</td>
                                <td>{ev_location}</td>
                                <td>{val.drink} {val.drink_size}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                ) : (
                    <p className='loading'>Loading...</p>
                )}           
            </div>






        </div>
    );
}

export default GetEventStats;