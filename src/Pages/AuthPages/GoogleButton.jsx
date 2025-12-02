import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import useAxios from '../../Hooks/useAxios';

const GoogleButton = ({ btnName }) => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxios();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);

        //* Create user in database
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.imbbImageUrl
        }
        axiosSecure.post("/users", userInfo)
          .then(res => {
            console.log("User data has been store", res.data);
            navigate(location?.state || "/");
          })
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