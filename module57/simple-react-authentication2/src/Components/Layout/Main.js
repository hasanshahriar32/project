import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Main = () => {
    return (
        <div>
                {/* =========Main Component========= */}
                <nav className=''>
                <br /><br />
                    <component className='d-flex mb-5 justify-content-evenly'>
                    <Link to='/login'><button className='btn btn-outline-primary'>L0GIN</button></Link>
                    
                    <Link to='/register'><button className='btn btn-outline-secondary'>REGISTER</button></Link>
                    <Link to='/loginProviders'><button className='btn btn-outline-info'>SIGN WITH</button></Link>
                    </component>
                </nav>
                <Outlet></Outlet>
        </div>
    );
};

export default Main;