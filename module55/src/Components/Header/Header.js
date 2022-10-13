import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-300">
  <div className="navbar-start">
    

  <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        <li tabindex="0">
        
          Topics
            
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          
          <ul className="bg-base-200">
          <li><NavLink to='/topics/1'>React</NavLink></li>
          <li><NavLink to='/topics/2'>Javascript</NavLink></li>
          <li><NavLink to='/topics/4'>CSS</NavLink></li>
          <li><NavLink to='/topics/5'>Git</NavLink></li>
        </ul>
        </li>
        <li><NavLink to='/stats'>Statistics</NavLink></li>
      <li><NavLink to='/blog'>Blog</NavLink></li>
      </ul>
    </div>




    <NavLink to='/topics' className="btn btn-ghost normal-case text-xl">Paradox Learning</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      
      <li tabIndex={0}>
        <NavLink to='/topics'>
          Topics
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </NavLink>
        <ul className="bg-base-200">
          <li><NavLink to='/topics/1'>React</NavLink></li>
          <li><NavLink to='/topics/2'>Javascript</NavLink></li>
          <li><NavLink to='/topics/4'>CSS</NavLink></li>
          <li><NavLink to='/topics/5'>Git</NavLink></li>
        </ul>
      </li>
      <li><NavLink to='/stats'>Statistics</NavLink></li>
      <li><NavLink to='/blog'>Blog</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink className="btn" to='/topics/1'>Get started</NavLink>
  </div>
</div>
    );
};

export default Header;