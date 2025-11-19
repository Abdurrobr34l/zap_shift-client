import React from 'react';
import authImage from '../assets/authImage.png';
import Logo from '../../Components/Logo';
import { Outlet } from 'react-router';
// import Container from '../utilities/Container';

const AuthLayout = () => {
  return (
    <div className='lg:relative'>
      <div className='pt-5 pl-5 lg:absolute lg:pt-10 lg:pl-10'>
        <Logo></Logo>
      </div>

      <div className='flex flex-col-reverse items-center lg:flex-row'>
        <div className='flex-1 pt-5 pl-5 h-screen w-full bg-white lg:pt-36 lg:pl-10'>
          <Outlet></Outlet>
        </div>

        <div className='flex-1 h-screen flex items-center justify-center'>
          <img src={authImage} alt="It is an image of delivery men" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;