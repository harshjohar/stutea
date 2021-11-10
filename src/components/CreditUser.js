import React, {useContext, useEffect} from 'react'
import userContext from '../Context/User/userContext'
import {useHistory} from 'react-router-dom';

export const CreditUser = () => {
    let history = useHistory();
    const uContext = useContext(userContext);
    const {user, getUserByAuthToken} = uContext;

    useEffect(() => {
        if(localStorage.getItem('token')) {
            getUserByAuthToken();
        } else {
            history.push('/login')
        }
        return () => {
            
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            {user.first+ " "+ user.last}<br/>
            Credits 0 (hehe greeb)
        </div>
    )
}
