import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const GoogleButton = ({btnName}) => {
  const {signInWithGoogle} = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
      navigate(location?.state || "/")
    })
    .then(err => {
      console.log(err);
    })
  }

  return (
    <>
      <button onClick={handleGoogleSignIn} type="button" className="bg-primary text-white p-2 rounded cursor-pointer hover:bg-primary/80">{btnName} with Google</button>
    </>
  );
};

export default GoogleButton;