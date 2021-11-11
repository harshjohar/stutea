import creditContext from "./creditContext"
import { useState } from "react"

export const CreditState = (props) => {
    // api calls
    const host = process.env.REACT_APP_BACKEND_URL;
    const initial = {};
    const [credits, setCredits] = useState(initial);

    // get credits by user id
    // transiction maybe
    return (
        <creditContext.Provider value={{}}>
            {props.children}
        </creditContext.Provider>
    )
}
