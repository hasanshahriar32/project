import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import './errorHandle.css'

const ErrorHandle = () => {
    return (
        <div className='errorBody'>
            {/* <Header></Header> */}
            <h3 className='errorHeader'>404 Error!</h3>
            <h4 className='errorMain'>Page not found</h4>
            <Link to="/home"><button className='backBtn'>Back to Home</button></Link>

        </div>
    );
};

export default ErrorHandle;