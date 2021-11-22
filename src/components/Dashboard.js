import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Dashboard.css"
import { MyQuestionDashboard } from './MyQuestionDashboard';
import { Questions } from './Questions';
import { SidePane } from './SidePane';
import { Route, Switch } from "react-router-dom";
import { QuestionTag } from './QuestionTag';
import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
import {ReactComponent as NotifIconActive} from "../Assets/Click/Notification.svg"
import {ReactComponent as CreditIcon} from "../Assets/Click/Credits.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import {ReactComponent as Prev} from "../Assets/Rest/Left.svg"
import {ReactComponent as Next} from "../Assets/Rest/Right.svg"
import {ReactComponent as PrevActive} from "../Assets/Click/Left.svg"
import {ReactComponent as NextActive} from "../Assets/Click/Right.svg"

import { BigQuestionCard } from './BigQuestionCard';
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
                {/* <Questions/> */}

                {/* just for demo, real deal is question.js */}
                <div className="big">
                    <BigQuestionCard color="green"/>
                    <BigQuestionCard color="magenta"/>
                </div>
                <div className="sub-heading">
                    <div className="sub-heading-text">
                        <div className="heading-more">
                            More questions
                        </div>
                        <div className="all-tags">
                            <Link className="all-tags-link" to='/tags-all'>
                                View all tags &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="buttons-next-prev">
                        {/* <Prev className="prev-next-btn"/> */}
                        <PrevActive className="prev-next-btn"/>
                        {/* <Next className="prev-next-btn"/> */}
                        <NextActive className="prev-next-btn"/>
                    </div>
                </div>
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
