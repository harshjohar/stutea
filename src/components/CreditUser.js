import React, {useContext, useEffect} from 'react'
import userContext from '../Context/User/userContext'
import {useHistory} from 'react-router-dom';
import "../css/Dashboard.css"

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
        <div className="credit-user">
            {/* <div className="user-dp"> */}
            <img src={user.dp} alt="dp" className="user-dp"/>
            {/* </div> */}
            <div className="user-data">
                <div className="username">
                {user.first+ " "+ user.last}
                </div>
                {/* <br/> */}
                <div className="user-credits">
                Credits 0 
                </div>
            </div>
        </div>
    )
}
