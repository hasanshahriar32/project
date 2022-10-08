import React, { PureComponent } from 'react';
import { Tooltip } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
          name: 'Share Market A',
          lastYear: 4000,
          thisYear: 2400,
          amt: 2400,
        },
        {
          name: 'Share Market B',
          lastYear: 3000,
          thisYear: 1398,
          amt: 2210,
        },
        {
          name: 'Share Market C',
          lastYear: 2000,
          thisYear: 9800,
          amt: 2290,
        },
        {
          name: 'Share Market D',
          lastYear: 2780,
          thisYear: 3908,
          amt: 2000,
        },
        {
          name: 'Share Market E',
          lastYear: 1890,
          thisYear: 4800,
          amt: 2181,
        },
        {
          name: 'Share Market F',
          lastYear: 2390,
          thisYear: 3800,
          amt: 2500,
        },
        {
          name: 'Share Market G',
          lastYear: 3490,
          thisYear: 4300,
          amt: 2100,
        },
      ];
      
      return (
        <div id='market' className='m-5 bg-green-100 w-full flex flex-col justify-center flex-evenly items-center h-[450px]'>
          
          <h2 className='text-4xl'>Our market share to several company worldwide.</h2>
          <small className='block md:hidden text-red-400'>visit at desktop view for better experience</small>
          <br /><br />
          <LineChart
        className=""
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
        <Legend />
        <Line type="monotone" dataKey="lastYear" stroke="#8884d8" activeDot={{ r: 10 }} />
        <Line type="monotone" dataKey="thisYear" stroke="#82ca9d" activeDot={{ r: 8 }}/>
      </LineChart>
        </div>
      );
};

export default AssignmentMarks;