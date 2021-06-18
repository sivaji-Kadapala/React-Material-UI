import React from 'react';
import {useHistory} from 'react-router-dom';
export default function Login() {
    let history=useHistory();
  
    return (
        <div >
            <h1>Login</h1>
            <p> This is Login page</p>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button onClick={()=>{history.push("/Home")}}>Login</button>
        </div>
    )
}
