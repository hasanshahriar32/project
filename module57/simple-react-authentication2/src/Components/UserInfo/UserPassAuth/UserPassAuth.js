import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../../Firebase/firebase.init';
import UserInfo from '../UserInfo';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const auth = getAuth(app);


function UserPassAuth() {
  const notify = () => toast("Check your email to verify your email address !");
    const [passErr,setPassErr]=useState('');
    const[user,setUser]= useState({});
    const [seccess,setSuccess] = useState(false); 
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        setSuccess(false);
        //here, we are gonna put the validation on password so that it maintains the minimalist requirements
        if (!/(?=.*[A-Z])/.test(password)){
            setPassErr('please provide at least a uppercase');
            return;
        }
        if(password.length<6){
            setPassErr('pass should be at least six char long');
            return;
        }
        if(!/(?=.*[!@#$&*%])/.test(password)){
            setPassErr('please at least one special char');
            return;
        }
        setPassErr('');

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
          // console.log(user);
          setSuccess(true);
          e.target.reset();
          notify(); 
          verifyEmail();
          updateUser(name,image);
          const user = result.user;
            setUser(user);
        })
        .catch(error=>{
            console.error('error',error);
            setPassErr(error.message);
        })
    }
    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
      .then(result=>{
        console.log(result);
      })
      .catch (error=>{
        console.error(error);
        setPassErr(error.message);
      })
    }

    const updateUser = (name,image)=>{
      updateProfile(auth.currentUser,{
        displayName:name,
        photoURL: image
      })
      .then(()=>{
        console.log('updated successfully');
        console.log(auth.currentUser);

      })
      .catch(error=>{
        console.error(error);
        setPassErr(error.message);
      })
    }
  return (
    <div>
        <h1>Register Now!!</h1>
        <Form className='mx-auto' onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter name"  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Profile Image Link (optional)</Form.Label>
        <Form.Control type="text" name='image' placeholder="Provide your image link"  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        <Form.Text className="text-muted">
         <small> We'll never share your email with anyone else.</small>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='checkbox' label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button><br />
      <small>Already a user? please <Link to="/login">login</Link></small>
      <small className='text-danger'>{passErr}</small><br />
      { seccess && <small className='text-success'>Registration Successful</small>} <br />
    </Form>
    <ToastContainer />
    <br />
    {<UserInfo user={user}></UserInfo>}
    </div>
  );
}

export default UserPassAuth;