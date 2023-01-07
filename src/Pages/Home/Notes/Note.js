import React from 'react';
import { RiMoreFill, RiArrowRightLine } from 'react-icons/ri';

const Note = () => {
    return (
        <div>
            <div className=' bg-indigo-200 border border-gray-700 rounded-lg w-11/12 mx-auto mb-5 px-5'>
                <RiMoreFill className='text-3xl ml-auto' />
                <div className='flex items-center justify-between pb-5'>
                    <span className='text-lg'>Note Name</span>
                    <span className='text-sm'>07/12/2022</span>
                </div>
            </div>

            <div className=' bg-indigo-200 border border-gray-700 rounded-lg w-11/12 mx-auto mb-5 px-5'>
                <RiMoreFill className='text-3xl ml-auto' />
                <div className='flex items-center justify-between pb-5'>
                    <span className='text-lg'>Note Name</span>
                    <span className='text-sm'>07/12/2022</span>
                </div>
            </div>

            <div className=' bg-indigo-200 border border-gray-700 rounded-lg w-11/12 mx-auto mb-5 px-5'>
                <RiMoreFill className='text-3xl ml-auto' />
                <div className='flex items-center justify-between pb-5'>
                    <span className='text-lg'>Note Name</span>
                    <span className='text-sm'>07/12/2022</span>
                </div>
            </div>

            <button className='bg-indigo-300 px-5 py-3 text-gray-700 font-bold border border-gray-700 rounded-lg flex items-center mx-auto mb-5'>View All <RiArrowRightLine className='ml-3' /></button>
        </div>
    );
};

export default Note;