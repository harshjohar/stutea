import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import '../css/Confirmation.css'
import mail from '../Assets/Click/Email.svg'
export const Wait = () => {
    const {email}=useParams()
    // console.log(email);
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
            <div className="confirm-img">
                <img src={mail} className="mail-img" alt="" />
            </div>
            <h2 className="confirm-head">Verify your email address</h2>
            <div className="confirm-text">
            You're almost there!<br/>
            We sent a verification link to <label className="confirm-head">{email}</label>. <br/>It may take a few minutes.
            <br/>
            {/* </div>
            <div className="resend"> */}
                <label className="confirm-head">
                Still can't find the email?</label>
                
                <button className="resendLink" onClick={reSend}>Resend Email</button>
            </div>
            {res?res.msg:""}
        </div>
    )
}
