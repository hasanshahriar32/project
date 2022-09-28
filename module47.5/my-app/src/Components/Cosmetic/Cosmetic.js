import React from 'react';

const Cosmetic = (props) => {
    
    const {name, balance, picture}= props.cosmetic;
    //type1: add to cart function equal to an anonymous function. when click the button, it will call the function which will call anonymous function with the parameter of the clicked cosmetic.
    const addToCart = () => {
        console.log('customer name: ', name);
        console.log('customer balance: ', balance);
    }
    return (
        <div style={{border : "red 2px dotted", margin: "14px", padding: "3px"}}>
            <h2>Buyer name:  {name}</h2>
            <p>Only for {balance}</p>
            <img src={picture} alt=""></img>
            <button onClick={addToCart}>Add to cart</button>
            <br />

        </div>
    );
};

export default Cosmetic;