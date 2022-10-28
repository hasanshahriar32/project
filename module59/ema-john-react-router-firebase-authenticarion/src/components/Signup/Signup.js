import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [error,setError] = useState('')
    const handleSubmit =(e)=>{

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const image = form.image.value;
        console.log(email, password, confirm);
        if(password!=confirm){
            setError('password mismatch!!')
            return;
        }
        setError('');
        


    }
    return (
        <div className='form-container'>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} action="">
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
                <br />
                <small >{error}</small>
            </form>
        </div>
    );
};

export default Signup;