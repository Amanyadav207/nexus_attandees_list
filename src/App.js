import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [attendees, setAttendees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/attendees.json')
            .then(response => response.json())
            .then(data => setAttendees(data));
    }, []);

    const filteredAttendees = attendees.filter(attendee =>
        attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <h1>ReactNexus Attendees</h1>
            <input
                type="text"
                placeholder="Search attendees..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="attendee-list">
                {filteredAttendees.map(attendee => (
                    <div key={attendee.id} className="attendee-card">
                        <h2>{attendee.name}</h2>
                        <p>{attendee.occupation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
