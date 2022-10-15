import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import UserInfo from '../Components/UserInfo/UserInfo';
import app from './firebase.init';
const auth = getAuth(app)
const GithubAuth = () => {
    
    const provider = new GithubAuthProvider();
    const [user, setUser] = useState({

    });
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>[
            setUser({})
        ])
        .catch(error=>{
            console.log(error.message);
            setUser({})

        })
    }
    const handleGithubSignIn = () => {

        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user;
            setUser(user);
            // console.log(user);
            // document.getElementById('githubSignIn').style.display='none';

        })
        .catch(error=>{
            console.error(error.message);
        })

    }
    // const provider = new GithubAuthProvider();
    return (
        <div>
            
            {<UserInfo user={user}></UserInfo>
            }
            {
                user.uid?
                <button onClick={handleSignOut}>Sign Out</button>
                : 
                <button id='githubSignIn' onClick={handleGithubSignIn}>Sign In With GitHub</button>
            
            }
            </div>
    );
};

export default GithubAuth;