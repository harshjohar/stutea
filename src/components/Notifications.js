import React, {useState, useEffect} from 'react'
import { Notification } from './Notification';

export const Notifications = () => {
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
            Notifications
            {notifications && notifications.notification ?  notifications.notification.map((notif)=> {
                return <Notification value={notif} key={notif._id}/>
            }):"No notification"}
        </div>
    )
}
