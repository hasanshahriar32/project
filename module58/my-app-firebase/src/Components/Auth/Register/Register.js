import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Contexts/UserContext';
import app from '../Firebase/firebase.init';
const auth = getAuth(app);
const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [error,setError]=useState('');
  const navigate = useNavigate();
  // console.log('createUser', createUser);
  
  const {loggedUser} = useContext(AuthContext);
  const userActive=loggedUser?.uid;
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.image.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          form.reset();
          setError('user created successfully');
          updateUserProfile(name, image);
          window.location.pathname='/home';
          // navigate('/home');

        })
        .catch(error=>{
          console.error(error);
          setError(error.message);
        })
    }
    // const updated = (e) =>{
    //   e.preventDefault();
    //   const name = e.target.value;
    //   const image = e.target.value;
    //   console.log(name,image);
    //   return (name,image);

    // }
    const updateUserProfile = (name, image)=>{
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
        }).then(() => {
          console.log('updated');
          }).catch((error) => {
            setError(error.message);
            console.error(error);
            });

    }
    return (
        <div  >
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse" >
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div id='form-register' className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit} className=" card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  autoFocus placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input type="text" placeholder="https://placeimg.com/192/192/people" name='image' className="input input-bordered"  autofill='https://placeimg.com/192/192/people' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required
           />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">already have an account? login</Link>
          </label>
        </div>
        
        <div className="form-control mt-6">
          {/* <button id='register-btn' onClick={()=>btnregisters} className="btn  btn-primary">Register</button> */}
          {
          userActive ? <button disabled className="btn  btn-primary" >Logged in!!</button>:
          <button className="btn  btn-primary">Register</button>
        }
        </div>
        <small className='text-danger text-sm'>{error}</small>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};


export default Register;