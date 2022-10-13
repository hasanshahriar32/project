import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
    return (
        <div className='errorBody'>
            {/* <Header></Header> */}
            <h3 className='errorHeader'>404 Error!</h3>
            <h4 className='errorMain'>Page not found</h4>
            <Link to="/topics"><button className='backBtn'>Back to Home</button></Link>

        </div>
    );
};

export default Error404;