import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Login.css"
const Login = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useHistory();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password,
            }),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            history.push("/");
        } else {
            alert("Enter valid credentials");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div className="form-head">
            <h2>Log in to the world of knowledge</h2>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        onChange={onChange}
                        value={credentials.username}
                    />
                </div>
                <div className="form">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        onChange={onChange}
                        value={credentials.password}
                    />
                </div>
                <div className="form-button">
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};
export default Login;