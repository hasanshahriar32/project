import React from 'react';
import Link from '../Link/Link';


const TailNav = () => {
    const routes = [
        {id:1, name: "Home", path: "/home"},
        {id:2, name: "Products", path: "/products"},
        {id:3, name: "Orders", path: "/orders"},
        {id:4, name: "Contact", path: "/contact"},
        {id:5, name: "About", path: "/about"},
    ]
    return (
        <nav>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default TailNav;