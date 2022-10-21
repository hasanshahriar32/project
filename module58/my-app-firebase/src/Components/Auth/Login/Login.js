import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';



const Login = () => {
  const [error, setError] = useState('');
  const [userMail, setUserMail] = useState('');
  const {signin} = useContext(AuthContext);
  const {signInWithPopup:googleSignIn} = useContext(AuthContext);
  const {twitterSignIn} = useContext(AuthContext);
  const {githubSignIn} = useContext(AuthContext);
  const {loggedUser} = useContext(AuthContext);
  const {resetPass} = useContext(AuthContext);
  const navigate = useNavigate();
  const userActive=loggedUser?.uid;
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signin(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          form.reset();
          setError('user logged in successfully');
          //redirect to home
          window.location.pathname='/home';
        }
        )
        .catch(error=>{
          console.log(error);
          setError(error.message);
        })
        
    }
    const handleGooglesignin = () =>{
      googleSignIn()
      .then(result=>{
        const user = result.user;
        console.log(user);
        setError('user logged in successfully');
        //redirect to home
        navigate('/home');
      })
      .catch(error=>{
        console.log(error);
        setError(error.message);
      })
    }
    const handletwittersignin = () =>{
      twitterSignIn()
      .then(result=>{
        const user = result.user;
        console.log(user);
        setError('user logged in successfully');
        //redirect to home
        window.location.pathname='/home';
      })
      .catch(error=>{
        console.log(error);
        setError(error.message);
      })
    }
    const handlegithubsignin = () =>{
      githubSignIn()
      .then(result=>{
        const user = result.user;
        console.log(user);
        setError('user logged in successfully');
        //redirect to home
        window.location.pathname='/home';
      })
      .catch(error=>{
        console.log(error);
        setError(error.message);
      })
    }
    const resetPassMail = (e) =>{
      const email = e.target.value;
      // console.log(email);
      setUserMail(email);
    }
    const handleResetPass = (e) =>{
      e.preventDefault();
      resetPass(userMail)
      .then(result=>{
        // const user = result.user;
        // console.log(user);
        // form.reset();
        setError('check your email');
        //redirect to home
        // window.location.pathname='/home';
      })
      .catch(error=>{
        console.log(error);
        setError(error.message);
      })
    }


    return (
        <div  >
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row" >
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" onBlur={resetPassMail} placeholder="email" autoFocus name='email' autoComplete="on" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' autoComplete="on" className="input input-bordered" required
           />
          
        </div>
        
        <div className="form-control mt-6">
          {
            userActive? <button disabled className="btn btn-primary">Logged In!!</button>:<>
            <button className="btn btn-primary">Login</button>
            <label className="label">
           <button onClick={handleResetPass}> <a href="#"  className="label-text-alt link link-hover">Forgot password?</a></button>
          </label>
            <br />
            <small className='text-sm text-gray-400'>or, login with</small>
            <div className="btn-group btn-group-vertical w-100 flex justify-center lg:btn-group-horizontal">
              <button className="btn " onClick={handleGooglesignin}>Google</button>
              <button className="btn" onClick={handletwittersignin}>Twitter</button>
              <button className="btn" onClick={handlegithubsignin}>GitHub</button>
            </div>
            </>
          }
          
        </div>
        
        <small className='text-sm'>{error}</small>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;