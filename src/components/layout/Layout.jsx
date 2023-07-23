import React from 'react';
import './layout.css';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
