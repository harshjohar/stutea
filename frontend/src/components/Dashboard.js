import React from "react";
import { Link, Routes } from "react-router-dom";
import "../css/Dashboard.css";
import "../css/NotificationBar.css";
import { Questions } from "./Questions";

import { Route } from "react-router-dom";
import { QuestionTag } from "./QuestionTag";
// import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
import { ReactComponent as NotifIconActive } from "../Assets/Click/Notification.svg";
import { ReactComponent as CreditIcon } from "../Assets/Click/Credits.svg";
import { ReactComponent as ProfileIcon } from "../Assets/Click/Profile.svg";
import { NavItem } from "./Notifications/NavItem";
import { Dropdown } from "./Notifications/Dropdown";
import { Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { Switch } from "@mui/material";

const Dashboard = (props) => {
  
    console.log(props);
    return (
        <>
            <div className="dashboard-main dark-text">
                <div className="top-icons">
                    {/* <NotifIconActive className='icon-top'/> */}
                    <Tooltip title="Bookmark">
                        <Link to="/favs">
                            <i className="fas fa-bookmark icon-top" style={{color:"gray"}}></i>
                        </Link>
                    </Tooltip>                   
                        <NavItem className="dark-text" icon={<Tooltip title="Notification"><NotifIconActive className="dark-text"/></Tooltip>}>
                            <Dropdown type="notif"></Dropdown>
                        </NavItem>
                        <NavItem icon={<Tooltip title="Credits"><CreditIcon /></Tooltip>}>
                            <Dropdown type="credits"></Dropdown>
                        </NavItem>
                    <Tooltip title="Profile">
                        <Link to="/profile">
                            <ProfileIcon className="icon-top dark-text" />
                        </Link>
                    </Tooltip>
                    <div style={{marginTop:"13px"}}>
                    <Switch onChange={props.toggleTheme} checked={props.theme === "dark"} className="m-[10px] sm:m-0" />
                    </div>
                    {/* <NavItem icon={<ProfileIcon/>}>
                        <Dropdown type="profile"></Dropdown>
                    </NavItem> */}
                </div>
                <div className="heading-top">
                    <div className="heading">
                        <p className="line">The one place for all</p>
                        <p className="line">your questions</p>
                    </div>
                    <div className="add-button">
                        <Link className="add-link" to="/add">
                            <button className="add-ques">
                                Ask your Question
                            </button>
                        </Link>
                    </div>
                </div>
                {/* <Routes>
                    <Route exact path="/" element={<Questions />} />

                    <Route exact path="/queryTag" element={<QuestionTag />} />
                </Routes> */}
                {props.flag?<QuestionTag/>:<Questions/>}
            </div>
        </>
    );
};

export default Dashboard;
