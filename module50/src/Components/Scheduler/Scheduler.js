import React from 'react';

const Scheduler = () => {
    return (
        <div>
            <div  id="btn" class="btn-group flex flex-wrap justify-center items-center">
                <input type="radio" name="options" data-title="15m" class="btn" />
                <input type="radio" name="options" data-title="20m" class="btn" />
                <input type="radio" name="options" data-title="30m" class="btn" />
                <input type="radio" name="options" data-title="60m" class="btn" />
                </div>
        </div>
    );
};

export default Scheduler;