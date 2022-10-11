import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const ProductDetails = () => {
    const productDetailed = useLoaderData();
    return (
        <div>
            <Header></Header><br /><br />
            {/* <h3>This is the real product details component</h3> */}
            <div>
            <h1>Product INTRO: {productDetailed.title}</h1>
            <p>Product Description: {productDetailed.body}</p>
            <Link to={`/user/${productDetailed.userId}`}><button  autofocus>Contact Seller?</button></Link>
            <Link to="../product"><button >Go Back</button></Link>
            </div>
        </div>
    );
};

export default ProductDetails;