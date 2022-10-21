import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className='form-container'>
            <h1>Signup</h1>
            <form action="">
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="text" name="image" id="" placeholder='Your Image Link' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Your Password' required/>
                <br />
                <input type="password" name="confirm" id="" placeholder='Confirm Password' required/>
                <br />
                <button type="submit">Register</button>
                <br />
                <small>Already a member? <Link to='/login'>login</Link> </small>
            </form>
        </div>
    );
};

export default Signup;