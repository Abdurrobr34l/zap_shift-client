import React from 'react';
import errorImage from '../assets/error-image.png';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <section className='flex flex-col items-center py-4 bg-white rounded-3xl sm:py-6 md:py-10 lg:py-14 xl:py-16 2xl:py-20'>
      <img src={errorImage} alt="It is error image" className='w-[335px]'/>
      <Link to={"/"} className='btn mt-5'>Go Home</Link>
    </section>
  );
};

export default ErrorPage;