import React from 'react';

const Link = (props) => {
    return (
        <div >
            <li className='mx-2'><a href={props.route.path}>{props.route.name}</a></li>
        </div>
    );
};

export default Link;