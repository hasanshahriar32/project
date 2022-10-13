import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    // console.log(topics.data);
    return (
        <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/tech" className="max-w-sm hidden lg:flex rounded-lg shadow-2xl" />
    
    <div>
      <div className='flex'>
        <img className='w-24 hidden md:flex h-24' src="https://tryhackme-images.s3.amazonaws.com/user-avatars/9a4e6c1fea1059db02bac448c6502afe.png" alt="" />
      <h1 className="text-5xl font-bold">Paradox <span className='text-secondary'>Front-end Web Development</span> Learning Center!</h1>
      </div>
      <p className="py-6">Welcome to the paradox of learning new things. Side by side of teaching, Now, we are offering our services to the web development sector. Our experienced developers will make your site more SEO friendly, less vulnerable to be crawled.. We take pride in helping people from all walks cyber solutions.</p>
      <Link to='/topics/1'><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>





            <div className='flex flex-wrap'>
            <h1></h1>
            {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
        </div>
    );
};

export default Topics;