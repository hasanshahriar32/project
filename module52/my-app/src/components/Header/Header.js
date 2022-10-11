import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='nav'>
            <NavLink className={({isActive})=>isActive?'active':undefined} to="/home">Home</NavLink>
            <NavLink  to='/product'>Product</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    );
};

export default Header;