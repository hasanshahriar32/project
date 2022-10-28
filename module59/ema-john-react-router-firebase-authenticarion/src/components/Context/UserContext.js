import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../Firebase/firebase.init';
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({children}) => {
    const user = {email:  'abc'}
    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;