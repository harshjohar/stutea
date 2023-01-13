import React from 'react'
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import '../css/Notif.css'

export const Notification = (props) => {
    const notif = props.value;
    const date = notif.timestamp ? notif.timestamp : "";
    return (
        <div className="notif">
            {notif.type==="answered" ?<div className="notif-text"> Someone answered your question. <Link className="notif-ques-link" to={`/view/${notif.recents}`}>Click to view it</Link>
            <div className="date-ques" id="notif-date">{dateFormat(date, "mmmm dS, yyyy, h:MM TT")}</div>
            </div> :<div className="notif-text"> "Your response to this question is accepted, credits added to your account."</div>}
        </div>
    )
}
