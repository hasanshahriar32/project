import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href='https://paradox-bd.com' target='_blank' className="btn btn-ghost normal-case text-xl">Paradox Bd</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <NavLink to="/home" className="justify-between">
            Home
            <span className="badge">New</span>
          </NavLink>
        </li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;