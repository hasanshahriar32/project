import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../Firebase/firebase.init';
import UserInfo from '../UserInfo/UserInfo';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const auth = getAuth(app);

const UserPassLogin = () => {
    const notify = (userMail) => toast(`an email with password reset link was sent to ${userMail}! Check it!`);
    const notify2 = () => toast("please provide your email address!");
    const [user, setUser] = useState({});
    const [userMail, setUserMail] = useState('');
    const [passErr, setPassErr] = useState('');
    const handleEmailBlur = (e) => {
        // const forgetPass =e.target.value;
        setUserMail(e.target.value);
        // console.log(e.target.value);
    }
    const handleForgetPass = (e) => {
        // console.log('forget pass');
        if(!userMail){
            notify2();
            return;
        }
        sendPasswordResetEmail(auth,userMail )
        .then(result=>{
            // console.log(result);
            notify(userMail);
        })
        .catch(error=>{
            console.error(error);
            setPassErr(error.message);
        }
        )
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            e.target.reset();
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode,errorMessage);
            setPassErr(errorMessage);
          });


    }
    return (
        <div>
            <h1>Welcome Back Buddy!!</h1>
            <Form className='mx-auto' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onBlur={handleEmailBlur} name='email' placeholder="Enter email" required />
        <Form.Text className="text-muted">
         <small> We'll never share your email with anyone else.</small>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'  placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <ToastContainer />
    <p ><small>New to this website? please <Link to='/register'>register</Link></small></p>
    <p>Forget password? <button type='button' onClick={handleForgetPass} className='btn btn-link'>please reset</button></p>
    {<UserInfo user={user}></UserInfo>}
    {
        passErr && <p className='text-danger'>{passErr}</p>
    }
        </div>
    );
};

export default UserPassLogin;