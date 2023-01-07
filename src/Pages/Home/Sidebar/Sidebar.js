import React from 'react';
import { ImSearch, ImHome, ImCalendar, } from 'react-icons/im';
import { MdDelete } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className='lg:min-w-[350px] lg:max-h-fit my-3 ml-3 rounded-xl fixed top-16 mt-4 bg-indigo-100 h-screen text-left border border-gray-700 hidden lg:block'>
            <ul className='w-11/12 mx-auto pt-5'>
                <li className='flex justify-center items-center bg-indigo-300 border border-gray-700 text-gray-900 font-bold  rounded-lg text-lg p-3 mb-5'><ImSearch className='mr-5' />Search</li>

                <li className='flex justify-center items-center bg-indigo-300 border border-gray-700 text-gray-900 font-bold  rounded-lg text-lg p-3 mb-5'><ImHome className='mr-5' />Home</li>

                <li className='flex justify-center items-center bg-indigo-300 border border-gray-700 text-gray-900 font-bold  rounded-lg text-lg p-3 mb-5'><ImCalendar className='mr-5' />Calender</li>

                <li className='flex justify-center items-center bg-indigo-300 border border-gray-700 text-gray-900 font-bold  rounded-lg text-lg p-3 mb-5'><MdDelete className='mr-5' />Trash Can</li>

            </ul>
        </div>
    );
};

export default Sidebar;