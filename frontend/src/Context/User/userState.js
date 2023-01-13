import userContext from "./userContext";
import { useState } from "react";

export const UserState = (props) => {
    // api calls
    const host = process.env.REACT_APP_BACKEND_URL;
    const initial = {
        first: "",
        last: "",
        username: "",
        email: "",
        dp: "",
        city: "",
    };
    const [user, setUser] = useState(initial);

    // get user by auth token
    const getUserByAuthToken = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        setUser(json);
    };
    // get user by id
    return (
        <userContext.Provider value={{user, getUserByAuthToken}}>{props.children}</userContext.Provider>
    );
};
