import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:"violet 2px solid ", margin: "8px"}}>
            {
                <h4>Dial is: {props.state}</h4>
            }
        </div>
    );
};

export default Dial;