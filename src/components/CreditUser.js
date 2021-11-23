import React, {useContext, useEffect} from 'react'
import userContext from '../Context/User/userContext'
import {useHistory} from 'react-router-dom';
import "../css/Dashboard.css"
import creditContext from '../Context/Credits/creditContext';

export const CreditUser = () => {
    let history = useHistory();
    const cContext = useContext(creditContext);
    const {credits, getCredits} = cContext;
    useEffect(() => {
        if(localStorage.getItem('token')) {
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
                Credits {credits.credits} 
        </div>
    )
}
