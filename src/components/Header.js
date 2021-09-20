import React from 'react';
import './Header.css';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className='header'>
            <Link to="/Settings">
            <IconButton color="inherit">
            <SettingsIcon style={{fontSize: 60, color: "#708090"}} className='settings-icon'/>
            </IconButton>
            </Link>
            <Link to="/">
            <IconButton color="inherit">
            <EmojiPeopleIcon style={{fontSize: 60, color: "#708090"}} className='people-icon'/>
            </IconButton>
            </Link>
            <Link to="/Messages">
            <IconButton color="inherit">
            <MessageIcon style={{fontSize: 60, color: "#708090"}} className='message-icon'/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
