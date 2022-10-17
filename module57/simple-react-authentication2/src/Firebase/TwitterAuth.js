import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import UserInfo from '../Components/UserInfo/UserInfo';
import app from './firebase.init';


const auth = getAuth(app);
const TwitterAuth = () => {
    const provider = new TwitterAuthProvider();
    const [user , setUser]=useState({});

    const handleTwitterSignOut = ()=>{
        auth.signOut()
        .then(()=>{
            setUser({})
        })
        .catch(error=>{	
            console.error(error.message);
        })
    }

    const handleTwitterSignIn = () => {
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            setUser(user);
        })
        .catch(error=>{
            console.log(error.message);
        }
        )
    }
    return (
        <div>
            {<UserInfo user={user}></UserInfo>
            }
            {
                user.uid?
                <button className='btn btn-secondary' id='googleSignIn' onClick={handleTwitterSignOut} >Sign Out</button>
                :
                
            <button  className='btn btn-secondary' id='googleSignIn' onClick={handleTwitterSignIn}>Sign In With Twitter</button>
            
            }
        </div>
    );
};

export default TwitterAuth;