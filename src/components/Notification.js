import React from 'react'
import { Link } from 'react-router-dom';

export const Notification = (props) => {
    const notif = props.value;

    return (
        <div>
            {notif.type==="answered" ?<div> Someone answered your question, <Link className="notif-ques-link" to={`/view/${notif.recents}`}>click to view it</Link></div> :
             "Your response to this question is accepted, credits added to your account."}
        </div>
    )
}
