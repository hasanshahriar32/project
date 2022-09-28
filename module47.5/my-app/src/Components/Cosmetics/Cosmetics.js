import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import cosmetics from './cosmetics_list';
// import { add, multiply } from '../Utilities/Calculate';
// import add from '../Utilities/Calculate';


const Cosmetics = () => {
    // const first = 555;
    // const second = 254;
    // const total = add (first,  second);
    // const total2 = multiply (first,  second);

    // const cosmetics = [
    //     {id: 1, name: 'Lipstick', price: '$99'},
    //     {id: 2, name: 'Foundation', price: '$199'},
    //     {id: 3, name: 'Blush', price: '$299'},
    //     {id: 4, name: 'Eyeliner', price: '$399'},
    //     {id: 5, name: 'Eyeshadow', price: '$499'},
    //     {id: 6, name: 'Mascara', price: '$599'}
        
    // ]
    const [cosmetics , setCosmetics] = useState([]);
    useEffect (()=>{
        fetch('data.json')
        // fetch('https://paradox.free.beeceptor.com')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>Welcome to my cosmetics store.</h1>
            {/* <p>total is: {total}</p>
            <p>total2 is: {total2}</p>  */}
            {
                 cosmetics.map(cosmetic=> <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }
            {
                // console.log(cosmetics)
            }

        </div>
    );
};


export default Cosmetics;
