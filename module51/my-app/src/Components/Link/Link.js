import React from 'react';

const Link = (props) => {
    return (
        <div className='' >
            <li className='mx-2 py-1 lg:p-3  rounded-sm hover:text-gray-200 hover:bg-blue-500'><a href={props.route.path}>{props.route.name}</a></li>
        </div>
    );
};

export default Link;