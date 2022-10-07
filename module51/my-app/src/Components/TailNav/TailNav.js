import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const TailNav = () => {
    const [open, setOpen] = useState(true);

    const routes = [
        {id:1, name: "Home", path: "/home"},
        {id:2, name: "Products", path: "/products"},
        {id:3, name: "Orders", path: "/orders"},
        {id:4, name: "Contact", path: "/contact"},
        {id:5, name: "About", path: "/about"},
    ]
    return (
        <nav className='lg:flex absolute top-16 w-full duration-500 ease-in-out lg:flex-evenly'>
            <div onClick={()=>setOpen(!open)} className="h-6 w-6 m-2 p-1 justify-end lg:m-4 lg:p-0 hover:text-purple-500 hover:bg-red-200 bg-purple-500 text-blue-500">
            {
                open?<Bars3Icon/>:<XMarkIcon />
            }
            </div>
           
            {/* <span>{open?"open":"close"}</span> */}
           <div>
           {
                open?<ul className=' absolute  ease-in-out md:flex justify-center'></ul>:
        <ul className={` duration-700 p-3 ease-in-out absolute  bg-purple-300 w-full md:flex justify-center`} >
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
            }
           </div>
        </nav>
    );
};

export default TailNav;