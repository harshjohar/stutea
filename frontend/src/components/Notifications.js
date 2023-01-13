import React, {useState, useEffect} from 'react'
import { Notification } from './Notification';
import { Spinner } from './Spinner';
// import "../css/Notifications.css"

export const Notifications = () => {
    // const {show}=props
    const host = process.env.REACT_APP_BACKEND_URL;
    const [notifications, setNotifications] = useState([]);
    const getNotifs = async () => {
        const response = await fetch(`${host}/api/notifications/get`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const res = await response.json();
        setNotifications(res);
    }
    useEffect(() => {
        getNotifs();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            {!notifications.notification && <Spinner/>}
            {notifications && notifications.notification ?  notifications.notification.slice(0,5).map((notif)=> {
                return <Notification value={notif} key={notif._id}/>
            }):""}
        </div>
    )
}
