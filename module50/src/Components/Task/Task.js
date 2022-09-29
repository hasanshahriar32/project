import React from 'react';

const Task = (props) => {
    const {name,time,picture,about} = props.task;
    return (
        <div className='p-4  flex flex-col justify-between task-content border bg-info  rounded shadow-sm text-info-content'>
            <div className=''>
            <div className='flex justify-center'><img className='w-7/12 flex justify-center align-center' src={picture} alt="" /></div>
            <h1 className='text-neutral text-bold text-2xl'>{name}</h1>
            <small className='h-30'>{about}</small>
            <br />
            <h3 className='text-primary'>Time: {time}mins</h3>
            </div>
            <button onClick={()=>props.handleAddToCart(props.task)} className='btn btn-secondary btn-outline hover:btn-primary' >Add To List</button>
        
               
        </div>
    );
};

export default Task;