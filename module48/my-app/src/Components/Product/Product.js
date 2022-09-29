import React from 'react';

const Product = (props) => {
    // console.log(props);
    // const handleAddToCart = props.handleAddToCart;
    const {name, img, seller, price, stock , ratings, ratingsCount} = props.product;
    return (
        <div className=' flex flex-col justify-between border p-3 rounded bg-info text-secondary-focus'>
           <div>
           <img src={img} className = "rounded w-100 h-100" alt="" />
            <h2 className=' text-primary-focus text-xl'>{name}</h2>
            <p>Manufacturer: {seller} </p>
            <small>Reviews: {ratingsCount}   <small>({ratings}⭐)</small></small>
            <p>Price: ${price}</p>
            <p>Only {stock} left in stock - order soon</p>
            <br />
           </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='shrink hover:shrink-0 btn sticky bottom-0'>add to cart</button>
        </div>
    );
};

export default Product;