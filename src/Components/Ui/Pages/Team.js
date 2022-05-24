import React from 'react';

import TeamList from './TeamList';
import logo from '../../../logo.svg';

const teamList = [
    {
        teamId: 't1',
        teamImg: {logo},
        teamName: 'Rajiv Sharma',
        teamTag: 'President Founder'
    },
    {
        teamId: 't2',
        teamImg: {logo},
        teamName: 'Priya Niyogi',
        teamTag: 'President Co-Founder'
    },
    {
        teamId: 't3',
        teamImg: {logo},
        teamName: 'Sai Sashreek',
        teamTag: 'Team Lead'
    },
    {
        teamId: 't4',
        teamImg: {logo},
        teamName: 'Rakesh Raj',
        teamTag: 'Creative Head'
    },
    {
        teamId: 't5',
        teamImg: {logo},
        teamName: 'Deepak Singh',
        teamTag: 'Senior Animator'
    },
    {
        teamId: 't6',
        teamImg: {logo},
        teamName: 'Ranadheer',
        teamTag: 'UI Developer'
    },
];

const Team = () => {
    return (
        <div>
            <h5 className='text-center display-3'>Meet The Team</h5>
            <TeamList teams = {teamList} />
        </div>
    );
};

export default Team;