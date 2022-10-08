//path 


import React from 'react';
import { useEffect } from 'react';
import PriceOption from './PriceOption';

const Pricing = () => {
    const PricingOptions=[
        {id:1 , name: "Free" , price:0, features: ["Single User", "5GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]},
        {id:2 , name: "Premium" , price:23 , features: ["5 Users", "50GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]},
        {id:3 , name: "Enterprise" , price:50 , features: ["Unlimited Users", "150GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]}

    ]//get the value of checked from the local storage and use useEffect to call the function with event

    return (
        <div>
            <div>
            <h2 className='text-4xl font-serif font-bold bg-green-500 hover:bg-black hover:text-green-500 py-3' id='orders'>best deal of the town <small className='text-sm'>.{localStorage.getItem('checked')}</small></h2>
            
            <br /><p className='mx-5 md:mx-12 text-lg font-serif  py-3 px-2 font-mono bg-slate-300'>Our pricing plans are designed to be simple and easy to understand. We offer three tiers of pricing to fit your needs.</p>
            </div>
            <br />
            <div className='grid lg:grid-cols-3  grid-cols-1  gap-3 m-4  justify-center'>
                {
                    PricingOptions.map(option => <PriceOption className='w-1/3 p-3' key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;