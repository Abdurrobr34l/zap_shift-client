import React from 'react';
import { Outlet } from 'react-router';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';
import Container from '../utilities/Container';

const MainLayout = () => {
  return (
    <div className='bg-[#EAECED]!'>
    <Container>
        <header className=' mb-5 py-5 lg:mb-9'>
        <Header></Header>
      </header>

      <main className='min-h-[calc(100vh-68px-403px)]'>
        <Outlet></Outlet>
      </main>

      <footer className='mt-6 pb-4 sm:mt-10 sm:pb-6 md:mt-14 md:pb-8 lg:mt-20 lg:pb-10 xl:mt-[100px] xl:pb-12 2xl:pb-[50px]'>
        <Footer></Footer>
      </footer>
    </Container>
    </div>
  );
};

export default MainLayout;