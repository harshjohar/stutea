import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Dashboard.css"
import { MyQuestionDashboard } from './MyQuestionDashboard';
import { Questions } from './Questions';
import { SidePane } from './SidePane';

const Dashboard = () => {
    return (
        <div className="dashboard-body">
            <div className="dashboard-head">
            <h2>DashBoard</h2>
            </div>
            <Link className="add" to="/add">
                <button>ADD</button>
            </Link>
            <SidePane/>
            <Questions/>
            <MyQuestionDashboard/>
        </div>
    )
}

export default Dashboard;
