import React from 'react';
import Banner from '../../Components/Banner';
import Services from '../../Components/Services';
import Works from '../../Components/Works';
// import Brands from '../../Components/Brands';

const Home = () => {
  return (
    <div className='flex flex-col gap-6 sm:gap-10 md:gap-14 lg:gap-20 2xl:gap-[100px]'>
      <Banner></Banner>
      {/* <Brands></Brands> */}
      <Works></Works>
      <Services></Services>
    </div>
  );
};

export default Home;