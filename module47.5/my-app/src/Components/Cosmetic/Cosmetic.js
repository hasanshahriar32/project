import React from 'react';
import {addToDatabase,removeFromDb} from '../Utilities/fakedb';



const Cosmetic = (props) => {
    const {name, balance, picture , id}= props.cosmetic;
    //type1: add to cart function equal to an anonymous function. when click the button, it will call the function which will call anonymous function with the parameter of the clicked cosmetic.
    function addToCart  ()  {
        console.log('customer name: ', name);
        console.log('customer balance: ', balance);
        console.log('customer id: ', id);
        // localStorage.setItem('id', id);
        // addToDatabase(id);
        //return of the function is the quantity of the clicked cosmetic
        const quantity = addToDatabase(id);
        // console.log('quantity is: ', quantity);
        document.getElementById(id).innerText ="Added to cart X " +quantity;

        // console.log(addToDatabase(id));
    }

    const removeFromCart = id =>{
        console.log("removing",id);
        removeFromDb(id);
        document.getElementById(id).innerText ="Added to cart X " +0;
    }

    return (
        <div style={{border : "red 2px dotted", margin: "14px", padding: "3px"}}>
            <h2>Buyer name:  {name}</h2>
            <p>Only for {balance}</p>
            <p>ID is: {id}</p>
            <img src={picture} alt=""></img>
            <button id={id} class="btn btn-primary" onClick={()=>addToCart() }>Add to cart</button>
            <button id={id} class="btn btn-danger ms-2" onClick={()=>removeFromCart(id)}>Remove</button>
            <br />

        </div>
    );
};

export default Cosmetic;