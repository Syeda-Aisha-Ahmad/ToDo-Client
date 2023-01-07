import React from 'react';
import Main from '../../Routes/Layouts/Main/Main';
import Nav from '../../Shared/Nav/Nav';
import Add from './Add/Add';
import Checklists from './Checklists.js/Checklists';
import Notes from './Notes/Notes';

const Home = () => {
    return (
        <div>
            <Add></Add>
            <div className='grid lg:grid-flow-col md:grid-flow-col gap-y-5 pb-5'>
                <Notes></Notes>
                <Checklists></Checklists>
            </div>
        </div>
    );
};

export default Home;