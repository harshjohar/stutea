import React, { useContext, useEffect } from 'react'
import userContext from '../Context/User/userContext'

export const Profile = () => {
    const uContext = useContext(userContext);
    const {user, getUserByAuthToken} = uContext;

    useEffect(() => {
        getUserByAuthToken();
        return () => {
            
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            Profile
            {user.first}
            {user.last}
            {user.username}
            {user.city}
        </div>
    )
}
