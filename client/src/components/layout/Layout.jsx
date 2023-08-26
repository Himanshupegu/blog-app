import React from 'react';
import './layout.css';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
