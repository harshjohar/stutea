import creditContext from "./creditContext"
import { useState } from "react"

export const CreditState = (props) => {
    // api calls
    const host = process.env.REACT_APP_BACKEND_URL;
    const initial = {};
    const [credits, setCredits] = useState(initial);

    // get credits by user id
    const getCredits = async() => {
        const response = await fetch(`${host}/api/credits/get`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })
        const credit = await response.json();
        setCredits(credit);
    }
    // transiction maybe
    return (
        <creditContext.Provider value={{credits, getCredits}}>
            {props.children}
        </creditContext.Provider>
    )
}
