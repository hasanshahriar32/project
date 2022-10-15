import React from 'react';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { useState } from 'react';
import UserInfo from '../Components/UserInfo/UserInfo';
const auth = getAuth(app)
const GoogleAuth = () => {
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    
    ;
    // const buttonIs=false;
    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(()=>[
            setUser({})
        ])
    }
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            setUser(user);
            // console.log(user);
            // <UserInfo user={user}></UserInfo>
            // buttonIs(true);
            //hide button
            // document.getElementById('googleSignIn').style.display='none';
            
        })
        .catch(error=>{
            console.log(error.message);
        }
        )
    };
    return (
        <div>
            {<UserInfo user={user}></UserInfo>
            }
            {
                user.uid?
                <button id='googleSignIn' onClick={handleGoogleSignOut} >Sign Out</button>
                :
                
            <button id='googleSignIn' onClick={handleGoogleSignIn}>Sign In With Google</button>
            
            }
        </div>
    );
};

export default GoogleAuth;