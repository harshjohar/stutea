import React from 'react'
import "../css/Dashboard.css"
import { AddQuestion } from './AddQuestion';
import { MyQuestions } from './MyQuestions';
import { Questions } from './Questions';

const Dashboard = () => {
    return (
        <div className="dashboard-body">
            <div className="dashboard-head">
            <h2>DashBoard</h2>
            </div>
            <AddQuestion/>
            <Questions/>
            <MyQuestions/>
        </div>
    )
}

export default Dashboard;
