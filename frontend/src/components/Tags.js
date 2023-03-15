import React, {useState, useEffect} from 'react'
import { Tag } from './Tag';
import '../css/Tag.css'
import { Link } from 'react-router-dom';
import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
// import {ReactComponent as NotifIconActive} from "../Assets/Click/Notification.svg"
import {ReactComponent as CreditIcon} from "../Assets/Click/Credits.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import { NavItem } from './Notifications/NavItem';
import { Dropdown } from './Notifications/Dropdown';
import PropTypes from 'prop-types';
import { Switch } from "@mui/material";

export const Tags = (props) => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const [tags, setTags] = useState({});
    // api call for tag
    const getTags = async() => {
        const response = await fetch(`${host}/api/questions/alltags`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })

        const json = await response.json();
        setTags(json);
    }
    useEffect(() => {
        getTags();
        // console.log(tags);
        // eslint-disable-next-line
    }, [])
    return (
        <>
        <div className="all-tags-here-link">
        <div className="top-icons">
                    {/* <NotifIconActive className='icon-top'/> */}
                    <NavItem icon={<NotifIcon/>}>
                        <Dropdown type="notif"></Dropdown>
                    </NavItem>
                    <NavItem icon={<CreditIcon/>}>
                        <Dropdown type="credits"></Dropdown>
                    </NavItem>
                    <Link to="/profile">
                    <ProfileIcon className="icon-top"/>
                    </Link>
                    <div style={{marginTop:"15px"}}>
                    <Switch onChange={props.toggleTheme} defaultValue = {"light"} checked={props.theme === "dark"} className="m-[10px] sm:m-0" />
                    </div>
            </div>
            <h2 className="tags-head dark-text">All tags here</h2>
            <div className="all-tags dark-text">
                {Object.entries(tags).map(([key, value])=> {
                    return (key!=="undefined" && <TagBlock heading={key} list={value}/>)
                })}
            </div>
        </div>
        </>
    )
}

const TagBlock = (props) => {
    const {heading, list} = props;
    return (
        <>
        <div>
            {heading}
            {list.map((tag)=> {
                return <Tag key={tag} value={tag}/>
            })}
        </div>
        </>
    )
}