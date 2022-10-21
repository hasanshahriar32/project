import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
  const {loggedUser} = useContext(AuthContext);
  const {logOut} = useContext(AuthContext);
  // console.log('createUser', loggedUser);
  const handleSignOut = () => {
    logOut()
    .then(res=>{
      console.log('sign out successfully');
    })
    .catch(err=>{
      console.log(err);
    }
    )
  }
    return (
        <div>
            <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <a href='https://paradox-bd.com' target='_blank' className="btn btn-ghost normal-case text-xl">Paradox Bd</a>
  </div>
  <div className="flex-none gap-2">
    <h4 className='text-sm overflow-hidden  sm:block'>Welcome {loggedUser?.displayName}</h4>
    <div className="form-control hidden md:block">

      {/* <input type="text" placeholder="Search" className="input input-bordered" /> */}
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {(loggedUser?.photoURL)? <img src={loggedUser?.photoURL} alt="user" />:<img src='https://www.pngarts.com/files/11/Avatar-Transparent-Background-PNG.png' alt="user" /> }
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <NavLink to="/home" className="justify-between">
            Home
            <span className="badge">New</span>
          </NavLink>
        </li>
        <li><NavLink to='/about'>Profile</NavLink></li>
        {
          loggedUser?.uid?
          <li><button onClick={handleSignOut} className='btn btn-outline btn-warning m-3 btn-sm'>Logout</button></li>
          :<div>
          
          <li><NavLink to='/register'>Register</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          </div>
          
        }
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;