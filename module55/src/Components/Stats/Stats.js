import axios from 'axios';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const [stats, setStats] = React.useState([]);
    axios.get('https://openapi.programming-hero.com/api/quiz')
    .then(data => {
        setStats(data.data.data);
        console.log(data.data.data)
    })



    return (
        <div className='bg-focus-content my-5'>
            <h1 className='text-4xl m-2'>Statistics of Today's quiz Learning</h1>
            <div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
            <div className='flex justify-center items-center flex-col '>
            <ResponsiveContainer  width="90%" height={500} className='m-5 py-5' >
                <LineChart width={300} height={100} data={stats}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis  />
                        <Tooltip />
                        <Legend />
                </LineChart>
                
            </ResponsiveContainer>
            </div>
            <div className="stats shadow">
  
  <div className='flex flex-wrap items-center justify-evenly w-100 flex-row' >

  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat ">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-8 rounded-full">
          <img src="https://placeimg.com/128/128/people" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  


  </div>
</div>
            
        </div>
    );
};

export default Stats;