import React from 'react';
import Note from './Note';

const Notes = () => {
    return (
        <div className='bg-rose-200 border border-gray-700 rounded-lg mx-5 mt-5'>
            <h1 className="text-center font-bold text-2xl py-5">Notes</h1>
            <Note></Note>
        </div>
    );
};

export default Notes;