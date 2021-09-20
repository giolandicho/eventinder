import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from "react-file-base64";
import { createUser } from '../actions/users';
import "./CreateUser.css";

function CreateUser() {

    const [userData, setUserData] = useState({
        name: "",
        image: ""
    })

    const dispatch = useDispatch();

    const handleClick = async (e) =>{
        e.preventDefault();
        dispatch(createUser(userData));
    }

    return (
        <div className="container">
            <h1>Create User</h1><br/>
            <form onSubmit={handleClick}>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setUserData({...userData, name: e.target.value})}></input><br/>
                <label>Images</label><br/>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setUserData({...userData, images: base64 })}/>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default CreateUser
