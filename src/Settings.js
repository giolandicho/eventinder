import React from 'react'
import { Link } from 'react-router-dom';
import "./Settings.css";
import { logout } from "./redux/userSlice";
import { useDispatch } from "react-redux";



function Settings() {

    const dispatch = useDispatch();
    const handleClick = async (e) =>{
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div>
            <Link to="/addevent">
            <h1>Add Event</h1>
            </Link><br/>
            <Link onClick={handleClick}>
            <h1>Log out</h1>
            </Link>
        </div>
    )
}

export default Settings
