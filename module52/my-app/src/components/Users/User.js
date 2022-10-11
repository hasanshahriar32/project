import React from 'react';
import { Link } from 'react-router-dom';

import './User.css'
const User = ({user}) => {
    return (
        <div className='user'>
            <h1>User Name: {user.name}</h1>
            <h3>User Email: {user.email}</h3>
            <h3>User Phone: {user.phone}</h3>
            <small>Username: {user.username}</small><br />
            <Link to={`/user/${user.id}`}><button>Know More </button></Link>

        </div>
    );
};

export default User;