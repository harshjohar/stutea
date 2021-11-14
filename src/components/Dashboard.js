import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Dashboard.css"
import { MyQuestionDashboard } from './MyQuestionDashboard';
import { Questions } from './Questions';
import { SidePane } from './SidePane';

const Dashboard = () => {
    return (
        <div className="dashboard-body">
            {/* <div className="dashboard-head">
            <h2>DashBoard</h2>
            </div> */}
            <div className="dleft">
                <SidePane/>
            </div>
            <div className="dmid">
                {/* <div className="add-doubt"> */}
                <Link className="add" to="/add">
                    <button className="addQues">Ask your doubt</button>
                </Link>
                {/* </div> */}
                <Questions/>
            </div>
            <div className="dright">
            <MyQuestionDashboard/>
            </div>
        </div>
    )
}

export default Dashboard;
