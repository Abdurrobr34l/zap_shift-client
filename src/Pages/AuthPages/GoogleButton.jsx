import React from 'react';
import useAuth from '../../Hooks/useAuth';

const GoogleButton = ({btnName}) => {
  const {signInWithGoogle} = useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
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