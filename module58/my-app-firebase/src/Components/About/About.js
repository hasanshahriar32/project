import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const About = () => {
    const {loggedUser} = useContext(AuthContext);
    const{loading} = useContext(AuthContext);
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className='flex m-5 flex-col justify-center items-center'>
            <h1 className='text-5xl my-5'>Profile</h1>
            <img className='w-[200px]' src={loggedUser?.photoURL} alt="" />
            <h1 className='text-4xl'>{loggedUser?.displayName}</h1>
            <h2 className='text-2xl'>{loggedUser?.email}</h2>
            <h3 className='text-2xl'>{loggedUser?.uid}</h3>
            <h3 className='text-2xl'>{loggedUser?.phoneNumber}</h3>


        </div>
    );
};

export default About;