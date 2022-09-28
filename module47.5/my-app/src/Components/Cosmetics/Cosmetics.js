import React from 'react';
import { add, multiply } from '../Utilities/Calculate';
// import add from '../Utilities/Calculate';


const Cosmetics = () => {
    const first = 555;
    const second = 254;
    const total = add (first,  second);
    const total2 = multiply (first,  second);
    return (
        <div>
            <h1>Welcome to my cosmetics store.</h1>
            <p>total is: {total}</p>
            <p>total2 is: {total2}</p> 
        </div>
    );
};


export default Cosmetics;
