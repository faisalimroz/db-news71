import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <div>
         <div className='min-h-screen'>
         <NavBar></NavBar>
         </div>
         <Footer></Footer>
        </div>
    );
};

export default Layout;