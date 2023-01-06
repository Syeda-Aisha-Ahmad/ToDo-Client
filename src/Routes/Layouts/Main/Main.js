import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../../Shared/Nav/Nav';
import { ImSearch, ImHome, ImCalendar, } from 'react-icons/im';
import { MdDelete, MdMoreVert } from 'react-icons/md';
import Add from '../../../Pages/Home/Add/Add';
import Notes from '../../../Pages/Home/Notes/Notes';
import Checklists from '../../../Pages/Home/Checklists.js/Checklists';
import Footer from '../../../Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='flex w-full '>
                <div className='w-3/12 my-3 ml-3 rounded-xl bg-indigo-100 h-screen text-left border border-gray-700 hidden lg:block'>
                    <ul className='w-11/12 mx-auto pt-5'>
                        <li className='flex justify-center items-center bg-indigo-300 border border-gray-700 text-gray-900 font-bold  rounded-lg text-lg p-3 mb-5'><ImSearch className='mr-5' />Search</li>

                        <li className='flex justify-center items-center bg-indigo-300 border border-gray-700 text-gray-900 font-bold  rounded-lg text-lg p-3 mb-5'><ImHome className='mr-5' />Home</li>

                        <li className='flex justify-center items-center bg-indigo-300 border border-gray-700 text-gray-900 font-bold  rounded-lg text-lg p-3 mb-5'><ImCalendar className='mr-5' />Calender</li>

                        <li className='flex justify-center items-center bg-indigo-300 border border-gray-700 text-gray-900 font-bold  rounded-lg text-lg p-3 mb-5'><MdDelete className='mr-5' />Trash Can</li>

                    </ul>
                </div>
                <div className='w-screen bg-indigo-100 my-3 mx-4 rounded-2xl border border-gray-700 mb-24'>
                    <Add></Add>
                    <div className='grid lg:grid-flow-col md:grid-flow-col gap-y-5 pb-5'>
                        <Notes></Notes>
                        <Checklists></Checklists>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;