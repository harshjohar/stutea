import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Dashboard.css"

import { Questions } from './Questions';

import { Route, Switch } from "react-router-dom";
import { QuestionTag } from './QuestionTag';
import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
import {ReactComponent as NotifIconActive} from "../Assets/Click/Notification.svg"
import {ReactComponent as CreditIcon} from "../Assets/Click/Credits.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import { QuestionCardMore } from './QuestionCardMore';
const Dashboard = () => {
    return (
        <>
            <div className="dashboard-main">
                <div className="top-icons">
                    {/* <NotifIconActive className='icon-top'/> */}
                    <NotifIcon className='icon-top'/>
                    <CreditIcon className='icon-top'/>
                    <ProfileIcon className='icon-top'/>
                </div>
                <div className="heading-top">
                    <div className="heading">
                        <p className='line'>The one place for all</p>
                        <p className='line'>your questions</p>
                    </div>
                    <div className="add-button">
                        <Link className="add-link" to="/add">
                            <button className="add-ques">Ask your Question</button>
                        </Link>
                    </div>
                </div>
                <Questions/>

                {/* just for demo, real deal is question.js */}
                <div className="grp-of-three">
                    <QuestionCardMore/>
                    <QuestionCardMore/>
                    <QuestionCardMore/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
