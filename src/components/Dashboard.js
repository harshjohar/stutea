import React from 'react'
import "../css/Dashboard.css"
import { AddQuestion } from './AddQuestion';
import { MyQuestions } from './MyQuestions';
import { Questions } from './Questions';

const Dashboard = () => {
    return (
        <div>
            DashBoard 
            <AddQuestion/>
            <Questions/>
            <MyQuestions/>
        </div>
    )
}

export default Dashboard;
