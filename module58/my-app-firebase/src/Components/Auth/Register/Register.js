import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
    }
    return (
        <div  >
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse" >
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" autoFocus placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input type="text" readOnly placeholder="https://placeimg.com/192/192/people" name='image' className="input input-bordered"  autoFill='https://placeimg.com/192/192/people' />
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};


export default Register;