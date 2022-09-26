import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Watch = () => {
    const [count , setCount] = useState(0);
    const increaseCount = () =>{

        const newCount = count +1;
        setCount(newCount);
        console.log("useState: "+count);
    }
    useEffect(()=>{
        console.log("useEffect: "+count);
    },[count])
    return (
        <div>
            <div>
                <h2>This is my watch</h2>
                <h3>My current step: {count}</h3>
                <button onClick={increaseCount}>De dana dan</button>
            </div>
        </div>
    );
};

export default Watch;