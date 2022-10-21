import React, { useContext } from 'react';
import { Children } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/Contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {loading} = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    if(user && user.uid){
        return children ;
    }
    return (
        <div>
            
        {
            (loading) ? <h1>Loading...</h1> : <Navigate to='/login'></Navigate>
        }
        </div>
    );
};

export default PrivateRoute;