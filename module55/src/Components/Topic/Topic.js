import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Topic = ({topic}) => {
    return (
        <div className='bg-neutral rounded mt-8 mb-4 shadow-md shadow hover:bg-neutral-focus hover:shadow-lg mx-auto p-3'>
            <img className='w-56 p-2' src={topic.logo} alt="" />
            <ToastContainer></ToastContainer>
            <h2 className='p-3 text-secondary-focus text-3xl'>{topic.name}</h2>
            <small className='text-secondary'>Total Quiz: {topic.total}</small><br />
            <Link to={`/topics/${topic.id}`}><button className='btn-info btn btn-outline'>Participate</button></Link>
            
        </div>
    );
};

export default Topic;