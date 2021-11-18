import React, {useContext, useEffect} from 'react'
import userContext from '../Context/User/userContext'
import {useHistory} from 'react-router-dom';
import "../css/Dashboard.css"
import creditContext from '../Context/Credits/creditContext';

export const CreditUser = () => {
    let history = useHistory();
    const uContext = useContext(userContext);
    const cContext = useContext(creditContext);
    const {user, getUserByAuthToken} = uContext;
    const {credits, getCredits} = cContext;
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getUserByAuthToken();
            getCredits();
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
                Credits {credits.credits} 
                </div>
            </div>
        </div>
    )
}
