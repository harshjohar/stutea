import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export const Wait = () => {
    const {email}=useParams()
    console.log(email);
    const host = process.env.REACT_APP_BACKEND_URL;
    const [res, setRes] = useState({})
    const reSend = async () => {
        const response = await fetch(`${host}/resend`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email
            })
        })
        const json = await response.json();
        setRes(json);
    }
    return (
        <div>
            A link for verification is sent to your registered email. If you haven't recieved any link, click to resend link
            <button className="resendLink" onClick={reSend}>Re-send Email</button>
            {res?res.msg:""}
        </div>
    )
}
