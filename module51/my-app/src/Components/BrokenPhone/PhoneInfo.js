import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const PhoneInfo = ({phone}) => {
    const notify = () => toast.info("Added to cart !");
    return (
        <div>
            {
                <div className='border m-3 w-48 h-52 hover:bg-green-200 hover:shadow-lg hover:border-red-900 border-slate-400 flex flex-col justify-between p-6'>
                    <h1 className='text-2xl text-blue-700'>{phone.name}</h1>
                    <h3 className='text-red-900'>Price: ${phone.price}</h3>
                    <button onClick={notify} className='btn m-3 p-2 hover:bg-blue-400 active:text-blue-100 bg-blue-300 rounded border active:bg-slate-500'>Add to Cart</button>
                    <ToastContainer />
                </div>

            }
        </div>
    );
};

export default PhoneInfo;