import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider} from 'firebase/auth';
import app from '../../Components/Auth/Firebase/firebase.init';
import { useEffect } from 'react';
// import App from '../../App';

const auth=getAuth(app);

export const AuthContext = createContext();
const UserContext = ({children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();
    const twitterprovider = new TwitterAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const signin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
        return signOut(auth);

    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleprovider);
    }
    const twitterSignIn = ()=>{
        return signInWithPopup(auth,twitterprovider);
    }
    const githubSignIn = ()=>{
        return signInWithPopup(auth,githubprovider);
    }
    const resetPass = (email)=>{
        return sendPasswordResetEmail(auth,email);
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser);
            console.log('loggeduser', loggedUser)
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }

    },[user])

    const authInfo ={user,createUser,loading, signin, loggedUser:user ,resetPass, logOut , signInWithPopup:googleSignIn,twitterSignIn,githubSignIn};
    return (
        
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;