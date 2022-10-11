import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div className='users'> 
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;