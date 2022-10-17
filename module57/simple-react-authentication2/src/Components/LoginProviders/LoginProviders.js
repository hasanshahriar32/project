import React from 'react';
import FacebookAuth from '../../Firebase/FacebookAuth';
import GithubAuth from '../../Firebase/GithubAuth';
import GoogleAuth from '../../Firebase/GoogleAuth';
import TwitterAuth from '../../Firebase/TwitterAuth';

const LoginProviders = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-evenly '>
                
    <GoogleAuth></GoogleAuth>
      <GithubAuth></GithubAuth>
      <TwitterAuth></TwitterAuth>
      <FacebookAuth></FacebookAuth>
        </div>
    );
};

export default LoginProviders;