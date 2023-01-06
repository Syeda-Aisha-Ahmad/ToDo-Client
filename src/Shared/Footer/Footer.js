import React from 'react';
import { ImSearch, ImHome, ImCalendar, } from 'react-icons/im';
import { MdDelete, MdMoreVert } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';

const Footer = () => {
    return (
        <footer className=''>
            <div className="btm-nav h-20 border border-gray-500">
                <button>
                    <ImSearch className='mr-5 text-2xl' />
                </button>
                <button className="">
                    <ImHome className='mr-5 text-2xl' />
                </button>
                <button className='bg-indigo-400 h-16 mr-5 my-2 rounded-full'>
                    <GrAdd className='text-2xl font-bold p-0' />
                </button>
                <button>
                    <ImCalendar className='mr-5 text-2xl' />
                </button>
                <button>
                    <MdDelete className='mr-5 text-2xl' />
                </button>
            </div>
        </footer>
    );
};

export default Footer;