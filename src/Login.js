import React from 'react'
import "./Login.css"
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { signInWithRedirect } from "firebase/auth"


function Login() {

    const signIn = async() =>{
        signInWithRedirect(auth,provider).catch((error)=> alert(error.message));
    }
    return (
        <div className="login-container">
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
