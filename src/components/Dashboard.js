import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Dashboard.css"
import { MyQuestionDashboard } from './MyQuestionDashboard';
import { Questions } from './Questions';
import { SidePane } from './SidePane';
import { Route, Switch } from "react-router-dom";
import { QuestionTag } from './QuestionTag';
import {DashBoardNavbar} from './DashBoardNavbar'
const Dashboard = () => {
    return (
        <div className="dashboard-body">
            <DashBoardNavbar/>
            <div className="dleft">
                <SidePane/>
            </div>
            <div className="dmid">
                {/* <div className="add-doubt"> */}
                <Link className="add" to="/add">
                    <button className="addQues">Ask your doubt</button>
                </Link>
                <div className="tags-prompt">
                    <Link className="all-tags-link" to='/tags-all'>
                        All tags &rarr;
                    </Link>
                </div>
                <Switch>
                <Route exact path='/'>
                    <Questions/>
                </Route>
                <Route exact path='/query'>
                    <QuestionTag/>
                </Route>
                </Switch>
            </div>
            <div className="dright">
            <MyQuestionDashboard/>
            </div>
        </div>
    )
}

export default Dashboard;
