import React from 'react'
import "../css/Dashboard.css"
import { MyQuestions } from './MyQuestions';
import { Questions } from './Questions';

const Dashboard = () => {
    return (
        <div>
            DashBoard
            <Questions/>
            <MyQuestions/>
        </div>
    )
}

export default Dashboard;
