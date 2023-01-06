import React from 'react';
import Checklist from './Checklist';

const Checklists = () => {
    return (
        <div className='bg-rose-200 border border-gray-700 rounded-lg mx-5'>
            <h1 className="text-center font-bold text-2xl py-5">Checklists</h1>
            <Checklist></Checklist>
        </div>
    );
};

export default Checklists;