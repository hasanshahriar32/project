import React from 'react';

const Pricing = () => {
    const PricingOptions=[
        {id:1 , name: "free" , price:0},
        {id:2 , name: "premium" , price:23},
        {id:3 , name: "enterprise" , price:50}

    ]
    return (
        <div>
            <h2 className='text-4xl font-serif font-bold bg-green-500 hover:bg-black hover:text-green-500 py-3'>best deal of the town</h2>
            <div className='flex flex-wrap justify-center'>
                {
                    PricingOptions.map(option => <div className='w-1/3 p-3'></div>
                }
            </div>
        </div>
    );
};

export default Pricing;