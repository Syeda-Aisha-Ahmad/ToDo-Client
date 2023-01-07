import React from 'react';
import { GrAdd } from 'react-icons/gr';

const Add = () => {
    return (
        <div className='border border-black rounded-xl bg-rose-200 py-8 m-5 hidden lg:block md:block'>
            <div className='flex items-center px-5' >
                <GrAdd className='text-3xl mr-5' /> <span className='text-black text-2xl'>Add Task</span>
            </div >
        </div >
    );
};

export default Add;