import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../../Shared/Nav/Nav';
import Footer from '../../../Shared/Footer/Footer';
import Home from '../../../Pages/Home/Home';
import Sidebar from '../../../Pages/Home/Sidebar/Sidebar';


const Main = () => {
    return (
        <div>
            <div className='relative '>
                <Nav></Nav>
            </div>

            <div className='flex justify-between w-full relative'>
                <Sidebar></Sidebar>
                <div className='lg:min-w-[950px] lg:w-8/12 lg:ml-auto w-screen bg-indigo-100 my-3 mx-4 mt-20 rounded-2xl border border-gray-700 mb-24'>
                    <Outlet></Outlet>
                </div>
            </div>

            <div className='lg:hidden'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;