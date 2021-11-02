import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Login.css"
const Login = () => {
    const host = "http://localhost:5000";
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
        <div className="my-5">
            <h2>LogIn to world of knowledge</h2>
            <form onSubmit={handleSubmit}>
                <div class="form">
                    <label for="">Username:</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        onChange={onChange}
                        value={credentials.username}
                    />
                </div>
                <div class="form">
                    <label for="">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        onChange={onChange}
                        value={credentials.password}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;