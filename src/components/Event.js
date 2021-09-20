import React from 'react';
import "./Event.css";

function Event() {
    return (
        <div className="settings-container">
            <div className="settings-header">
                <h1>Add an Event</h1>
            </div>
            <div className="form-container">
                <form className="form">
                    <label>Event Name</label><br/>
                    <input type="text"></input><br/>
                    <label>Date</label><br/>
                    <input type="date"></input><br/>
                    <label>Address</label><br/>
                    <input type="text"></input><br/>
                    <label>City</label><br/>
                    <input type="text"></input><br/>
                    <label>State</label><br/>
                    <input type="text"></input><br/>
                    <label>Country</label><br/>
                    <input type="text"></input><br/>
                    <button type="submit">Submit</button>
                    <button>Clear</button>
                </form>
            </div>
        </div>
    )
}

export default Event
