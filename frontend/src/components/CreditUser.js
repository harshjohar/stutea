import React, {useContext, useEffect} from 'react'
// import userContext from '../Context/User/userContext'
import {useNavigate} from 'react-router-dom';
import "../css/Dashboard.css"
import creditContext from '../Context/Credits/creditContext';

export const CreditUser = () => {
    let history = useNavigate();
    const cContext = useContext(creditContext);
    const {credits, getCredits} = cContext;
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getCredits();
        } else {
            history('/login')
        }
        return () => {
            
        }
        // eslint-disable-next-line
    }, [])
    const handleClick=()=>{
        history('/buycredits')
    }
    return (
        <div className="credit-user">
            <div className="curr-credits">
                Credits:<div className="credits"> {credits.credits}</div>
            </div> 
            <div className="buy-btn">
                <button className="buy" onClick={handleClick}>Buy Credits</button>
            </div>
        </div>
    )
}
