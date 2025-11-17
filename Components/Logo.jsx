import React from 'react';
import logo from '../src/assets/logo.png';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to={"/"} className='flex items-center cursor-pointer w-[150px]'>
      <img src={logo} alt="It is website logo image"/>
          <span className="relative top-2 right-3 text-xl font-bold text-base-content lg:text-[32px]">ZapShift</span>
    </Link>
  );
};

export default Logo;