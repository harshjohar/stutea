import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/DashboardNavbar.css"
import about from "../Assets/Rest/About.svg"
import aboutActive from "../Assets/Click/About.svg"
import home from "../Assets/Rest/Home.svg"
import homeActive from "../Assets/Click/Home.svg"
import profile from "../Assets/Rest/Profile.svg"
import profileActive from "../Assets/Click/Profile.svg"
import contact from "../Assets/Rest/Contact.svg"
import contactActive from "../Assets/Click/Contact.svg"
import cart from "../Assets/Rest/Cart.svg"
import cartActive from "../Assets/Click/Cart.svg"
import logout from "../Assets/Click/Logout.svg"
import login from "../Assets/Click/Login.svg"
import register from "../Assets/Click/Register.svg"
import { ReactComponent as Logo } from "../logo.svg"
import PropTypes from 'prop-types';
import { Switch } from "@mui/material";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import sun from "../Assets/sun-icon.svg";
import moon from "../Assets/moon-icon.svg";

export const DashBoardNavbar = (props) => {
    console.log(props);
    let location = useLocation();
    let history = useNavigate();
    const handleLogout = () => {
        confirmAlert({
            title: "Confirmation",
            message: "Are you sure, you want to logout?",
            buttons: [
                {
                    label: "Cancel",
                },
                {
                    label: "Logout",
                    onClick: () => (
                        localStorage.removeItem('token'),
                        history("/")
                    ),
                },
            ],
        });
    }

    return (
        <div className="nav-main dark-text">
            <div className="nav-logo-wrapper">
                {/* img-here */}
                <Logo className="logo dark-text" onClick={() => { history("/") }} />
            </div>
            <div className="link-list" >
                <ul className="links">
                    <li className="link-list-item" >
                        <Link className={`ll-item ${location.pathname === '/' ? "active-nav" : ""}`} to="/">
                            <div className="nav-icon">
                                {location.pathname === '/' ? <img src={homeActive} alt="" className="icon-lar" /> : <img src={home} alt="" className="icon" />}
                            </div>
                            <div className={`nav-text${location.pathname === '/' ? "-active" : ""}`}>Home</div>
                        </Link>
                    </li>
                    {localStorage.getItem('token') && <li className="link-list-item">
                        <Link className={`ll-item ${location.pathname === '/profile' ? "active-nav" : ""}`} to="/profile">
                            <div className="nav-icon">
                                {location.pathname === '/profile' ? <img src={profileActive} alt="" className="icon-lar" /> : <img src={profile} alt="" className="icon" />}
                            </div>
                            <div className={`nav-text${location.pathname === '/profile' ? "-active" : ""}`}>Profile</div>
                        </Link>
                    </li>}
                    <li className="link-list-item">
                        <Link className={`ll-item ${location.pathname === '/about' ? "active-nav" : ""}`} to="/about">
                            <div className="nav-icon">
                                {location.pathname === '/about' ? <img src={aboutActive} alt="" className='icon-lar' /> : <img src={about} alt="" className="icon" />}
                            </div>
                            <div className={`nav-text${location.pathname === '/about' ? "-active" : ""}`}>About</div>
                        </Link>
                    </li>
                    <li className="link-list-item">
                        <Link className={`ll-item ${location.pathname === '/contact' ? "active-nav" : ""}`} to="/contact">
                            <div className="nav-icon">
                                {location.pathname === '/contact' ? <img src={contactActive} alt="" className="icon-lar" /> : <img src={contact} alt="" className="icon" />}
                            </div>
                            <div className={`nav-text${location.pathname === '/contact' ? "-active" : ""}`}>Contact</div>
                        </Link>
                    </li>
                    {localStorage.getItem('token') && <li className="link-list-item">
                        <Link to="/shop" className={`ll-item ${location.pathname === '/shop' ? "active-nav" : ""}`}>
                            <div className="nav-icon">
                                {location.pathname === '/shop' ? <img src={cartActive} alt="" className="icon-lar" /> : <img src={cart} alt="" className="icon" />}
                            </div>
                            <div className={`nav-text${location.pathname === '/shop' ? "-active" : ""}`}>Shop</div>
                        </Link>
                    </li>}

                    {localStorage.getItem('token') ?

                        <div>
                            <li className="link-list-item">
                                <div className="logout">
                                    <button className="logout-btn" onClick={handleLogout}>
                                        <div className="nav-icon">
                                            <img src={logout} alt="" className="icon" /></div>
                                        <div className={`nav-text${location.pathname === '/logout' ? "-active" : ""}`}>Logout</div>
                                    </button>
                                </div>
                            </li>
                        </div>
                        :
                        <div>
                            <li className="link-list-item">
                                <Link className="ll-item" to="/register" style={location.pathname === '/register' ? { display: "none" } : { display: "inline" }}>
                                    <button className="logout-btn">
                                        <div className="nav-icon">
                                            <img src={register} alt="" className="icon dark-icon" />
                                        </div>
                                        <div className={`nav-text${location.pathname === '/login' ? "-active" : ""}`}>Register</div>
                                    </button>
                                </Link>
                            </li>
                            <li className="link-list-item" style={location.pathname === '/login' ? { display: "none" } : { display: "inline" }}>
                                <Link className="ll-item" to="/login" >
                                    <button className="logout-btn" >
                                        <div className="nav-icon" >
                                            <img src={login} alt="" className="icon dark-icon" />
                                        </div>
                                        <div className={`nav-text${location.pathname === '/register' ? "-active" : ""}`}>Login</div>
                                    </button>
                                </Link>
                                <div style={{ width: "80%", textAlign: "center" }}>
                                <button
                                    onClick={props.toggleTheme}
                                    className='switch-icon'
                                >
                                    {props.theme === "dark" ? (
                                        <img src={sun} alt='sun icon'width={25}/>
                                        ) : (
                                        <img src={moon} alt='moon icon'width={25}/>
                                    )}
                                </button>

                                </div>
                            </li>
                        </div>}
                </ul>

            </div>

        </div>
    )
}
