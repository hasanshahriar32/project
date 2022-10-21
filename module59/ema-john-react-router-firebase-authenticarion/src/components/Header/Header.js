import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import AuthContext from '../Context/UserContext';

import './Header.css';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;