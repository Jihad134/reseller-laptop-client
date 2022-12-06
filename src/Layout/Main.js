import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shareard/Footer';
import Header from '../Shareard/Header';

const Main = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;