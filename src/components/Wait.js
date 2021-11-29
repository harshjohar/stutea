import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import '../css/Confirmation.css'
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
        <div className="confirm-main">
            <h2 className="confirm-head">Verify your email address</h2>
            <div className="confirm-text">
            A link for verification has been sent to the email address you entered. 

            </div>
            <div className="resend">

                If you haven't received any link, click here.
                
                <button className="resendLink" onClick={reSend}>Resend link</button>
            </div>
            {res?res.msg:""}
        </div>
    )
}
