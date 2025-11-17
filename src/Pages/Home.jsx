import React from 'react';
import Banner from '../../Components/Banner';

const Home = () => {
  return (
    <div className='flex flex-col gap-6 sm:gap-10 md:gap-14 lg:gap-20 2xl:gap-[100px]'>
      <Banner></Banner>
    </div>
  );
};

export default Home;