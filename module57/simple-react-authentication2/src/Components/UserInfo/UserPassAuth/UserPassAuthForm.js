import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../../Firebase/firebase.init';

const registerHandler = (e)=>{
    const email = e.target.email.value;
    const  password = e.target.password.value;
    console.log(email, password);
    e.preventDefault();
    
}

const handleEmailBlur = (e)=>{
    const email = e.target.value;
    console.log(email);
}
const handlePassBlur = (e)=>{
    const password = e.target.value;
    console.log(password);
}

const auth = getAuth(app);
const UserPassAuthForm = () => {
    return (
        <div>
            <form onSubmit={registerHandler}>

        <input onBlur={handleEmailBlur} placeholder='Your Email' name='email' type="email" />
        <br />
        <input onBlur={handlePassBlur} placeholder='Your Password' name='password' type="password" />
        <br />
        <button type="submit">Register</button>
            </form>
<br /><br />

        </div>
    );
};

export default UserPassAuthForm;