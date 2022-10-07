import React from 'react';

const Link = (props) => {
    return (
        <div className='' >
            <li className='mx-2 py-1 lg:p-3  rounded-sm hover:bg-purple-500'><a href={props.route.path}>{props.route.name}</a></li>
        </div>
    );
};

export default Link;