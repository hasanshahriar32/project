import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    return (
        <div className='product'>
            <h2>{product.title}</h2>
            <p>{product.body}</p>
            <Link id={`${product.id}`} to={`/product/${product.id}`}><button>Buy Now</button></Link>
        </div>
    );
};

export default Product;