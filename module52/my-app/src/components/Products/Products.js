import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Product from './Product';
import './Products.css'

const Products = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div className='products'>
            <h1>The Details on Products</h1>
            {
                products.map(product=><Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;