import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import './User.css'

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div className='user'>
            <div><Header ></Header></div>
            <br /><br />
            <div >
            <h2>Everything U need to know about <h2 className='userDetail'>{user.name}</h2> </h2>
            <h3>User Email: {user.email}</h3>
            <h3>User Phone: {user.phone}</h3>
            <h3>User Website: {user.website}</h3>
            <h3>User Company: {user.company.name}</h3>
            <h3>Company Responsibility: {user.company.catchPhrase}</h3>
            <h3>User Responsibility: {user.company.bs}</h3>
            <h3>User Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}, {user.address.geo.lat} {user.address.geo.lng}</h3>
           
            <Link to='../users'><button>Go Back</button></Link>
            </div>
        </div>
    );
};

export default UserDetails;