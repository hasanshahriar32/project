import axios from 'axios';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useEffect } from 'react';
import { useState } from 'react';
import Chart from './Chart';
import PhoneInfo from './PhoneInfo';


const BrokenPhone = () => {
    const [phones,setPhones]=useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
        // console.log(data.data.data);
        const phoneLoaded = data.data.data;
        let id = 0;
        const phoneData = phoneLoaded.map(phone=>{
            id++;
            const parts = phone.slug.split('-');
            const price = parseInt(parts[1]);
            const singlePhone ={
                id:id,
                name : phone.phone_name,
                price: price
            }
            
            return singlePhone;
        })
        setPhones(phoneData);

    })
    },[])
    return (
        <div className='bg-blue-100 m-5'>
            <h1 className='text-3xl font-sans my-3 pt-8  ' id='products'>List of the items offered only for our subscribed members.</h1>
            <small>Premium members will get <span className='text-red-600'>38%</span> of and enterprise members will get <span className='text-red-600'>50%</span> off! <a target="_blank" className='text-blue-700' href="https://paradox-bd.com">Contact Us.</a></small>
            <div className='flex flex-wrap m-4 items-center justify-evenly'>
            {
                phones.map(phone=> <div><PhoneInfo key={phone.id} phone={phone}></PhoneInfo>
                </div>)
            }
            </div>  
            <div className='w-full' >
                
                {
                    
                    <div className='w-full h-[500px] flex flex-center justify-center mt-6 items-center'>
                        <LineChart width={600} height={400} data={phones}>
                        <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                        <XAxis dataKey="name" />
                        <YAxis  />
          <Tooltip />
          <Legend />

                        </LineChart>    
                    </div>
                }
          
        </div>
            
        </div>
    );
};

export default BrokenPhone;