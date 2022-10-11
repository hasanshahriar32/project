import React from 'react';

const Task = (props) => {
    const {name,time,picture,about,id} = props.task;
    return (
        <div className='p-4  flex flex-col justify-between task-content border bg-info  rounded shadow-sm text-info-content'>
            <div className=''>
            <div className='flex justify-center'><img className=' flex justify-center align-center cart-pic' src={picture} alt="" /></div>
            <h1 className='text-neutral text-bold text-3xl'>{name}</h1>
            <small className='h-30'>{about}</small>
            <br />
            <h3 className='text-primary'>Time: {time}mins</h3>
            </div>
            <button onClick={()=>props.handleAddToCart(props.task)} id={id} className='btn btn-secondary btn-outline hover:btn-primary' >Add To List</button>
            
              
        </div>
    );
};

export default Task;