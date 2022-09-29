import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        
            <nav className='headerNav'>
                <a href="https://paradox-bd.com" target={'blank'}><img src={logo} alt="" /></a>
                <div className='navLink'>
                    <a href="https://paradox-bd.com" target={'blank'}>Home</a>
                    <a href="https://hasanshahriar32.github.io/me" target={'blank'}>About</a>
                    <a href="https://paradox-bd.me" target={'blank'}>Services</a>
                    <a href="https://t.me/mrxx32" target={'blank'}>Contact</a>
                </div>
            </nav>
        
    );
};

export default Header;