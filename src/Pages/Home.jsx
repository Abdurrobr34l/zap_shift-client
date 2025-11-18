import React from 'react';
import Banner from '../../Components/Banner';
import Works from '../../Components/Works';
import Services from '../../Components/Services';
import Brands from '../../Components/Brands';
import Reviews from '../../Components/Reviews/Reviews';

const reviewsPromise = fetch("/reviews.json").then(res => res.json())

const Home = () => {
  return (
    <div className='flex flex-col gap-6 sm:gap-10 md:gap-14 lg:gap-20 2xl:gap-[100px]'>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <Brands></Brands>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;