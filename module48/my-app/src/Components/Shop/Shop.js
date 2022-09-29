import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //add to sidebar
    const [cart, setCart]= useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (products)=>{
        console.log('clicked', products);
        // cart.push(products);
        const newCart = [...cart , products];
        setCart(newCart);
    }
    return (
        <div className='shop-container '>
            <div className='products-container '>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container text-success-content bg-secondary'>

                <h1 className='text-3xl text-info-content'>Order Summary</h1>
                <small>Total Selected Items: {cart.length}</small>
            </div>

        </div>
    );
};

export default Shop;