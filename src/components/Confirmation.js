import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

export const Confirmation = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const {email, token} = useParams();
    const [success, setSuccess] = useState(true);
    const [text, setText] = useState("");
    const confirm =async ()=> {
        const response = await fetch(`${host}/confirmation/${email}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        // const status = await response.status();
        // if(status===200) {
            // setText(json.msg);
            setSuccess(true);

            setText(json.msg);
        // }
    }

    useEffect(() => {
        confirm();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            confirmation
            {success}
            {text}
        </div>
    )
}
