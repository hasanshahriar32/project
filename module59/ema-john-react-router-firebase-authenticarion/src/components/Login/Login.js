import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <h1>Login</h1>
            <form action="">
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Your Password' required/>
                <br />
                <button type="submit">Login</button>
                <br />
                <small>New here? <Link to='/signup'>register</Link> </small>
            </form>
        </div>
    );
};

export default Login;