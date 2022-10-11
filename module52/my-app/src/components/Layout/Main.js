import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <h1>Common Thing</h1> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;