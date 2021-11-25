import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Login.css"
import image from '../StuTea-Login.svg'
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
        <div className="form-body-main">


            <div className="image">
                <img src={image} alt="" />
            </div>
        <div className="form-head">
            <h2 className="form-title">Welcome to StuTea</h2>
            <form onSubmit={handleSubmit} className="form-body">
                <div className="login-form">
                    <label htmlFor="" className="form-label">Username</label>
                    <div className="lform-input">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        onChange={onChange}
                        value={credentials.username}
                        className="form-input"
                    /></div>
                </div>
                <div className="login-form">
                    <label htmlFor="" className="form-label">Password</label>
                    <div className="lform-input">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        onChange={onChange}
                        value={credentials.password}
                        className="form-input"
                    /></div>
                </div>
                <div className="form-button">
                    <button type="submit" className="form-submit-btn">Login</button>
                </div>
            </form>
        </div>
        </div>
    );
};
export default Login;