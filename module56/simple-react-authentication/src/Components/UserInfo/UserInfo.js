import React from 'react';
import './UserInfo.css'
const UserInfo = ({user}) => {
    // console.log(user);
    // console.log(user.photoURL);

    return (
        <div>
            {
                (user.providerId!=="firebase")?<></>:<div>
                    <h1>Welcome {user.displayName}</h1>
                    <img className='imgProperties' src={user.photoURL} alt=""/>
                    <h5>Email address:{user.email}</h5>
                    <p>
                        <small>uid: {user.uid}</small>
                    </p>
                    <p> 
                        <small>providerId: {user.providerId}</small>
                    </p>
                    <p>
                        <small>phoneNumber: {user.phoneNumber}</small>
                    </p>
                    {/* buton to refresh window  */}
                    {/* <button onClick={()=>window.location.reload()}>Sign Out</button> */}
                </div>
            }
            
        </div>
    );
};

export default UserInfo;