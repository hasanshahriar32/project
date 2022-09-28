import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Dial from '../Dial/Dial';

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
            <div style={{border: "red 2px solid", margin: "10px" }}>
                <h2>This is my watch</h2>
                <h3>My current step: {count}</h3>
                <button onClick={increaseCount}>De dana dan</button>
                <Dial state = {count}></Dial>
            </div>
        </div>
    );
};

export default Watch;