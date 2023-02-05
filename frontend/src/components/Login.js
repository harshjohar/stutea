import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "../css/Login.css";
import image from "../StuTea-Login.svg";
import Loader from './LoadingBox'

const Login = () => {
  const host = process.env.REACT_APP_BACKEND_URL;
  let history = useNavigate();
  const init = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(init);
  const [isLoading, setLoading] = useState(false);

  const incorrectCredentialsAlert = () => {
    confirmAlert({
      title: "Wrong Credentials",
      message: "Please check your username/password",
      buttons: [
        {
          label: "Close",
          onClick: () => history("/login"),
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
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
      history("/");
      setLoading(false);
    } else {
      // alert("Enter valid credentials");
      incorrectCredentialsAlert();
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-body-main">
      <div className="image">
        <img className="login-pic" src={image} alt="" />
      </div>
      <div className="form-head">
        <h2 className="form-title">Welcome to StuTea</h2>
        <form onSubmit={handleSubmit} className="form-body">
          <div className="login-form">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <div className="lform-input">
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                onChange={onChange}
                value={credentials.username}
                className="form-input"
              />
            </div>
          </div>
          <div className="login-form">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <div className="lform-input">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={onChange}
                value={credentials.password}
                className="form-input"
              />
            </div>
          </div>
          {isLoading? (
                    <div className="form-button">
                     <Loader/> 
                    </div>
                 ):(
          <div className="form-button">
            <button type="submit"  className="form-submit-btn">
              Login
            </button>
          </div>
                 )}
        </form>
      </div>
    </div>
  );
};
export default Login;
