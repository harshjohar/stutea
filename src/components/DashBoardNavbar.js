import React, {useState} from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
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

export const DashBoardNavbar = () => {
    let location = useLocation();
    let history = useHistory();
    const handleLogout = ()=> {
        localStorage.removeItem('token')
        history.push('/login')
    }
    const [hamburger, setHamburger] = useState(false)
    const toggle=()=>{
        setHamburger(!hamburger)
    }
    return (
        <div className="nav-main">
            <div className="nav-logo-wrapper">
                img-here
            </div>
            <div className="link-list">
                <ul className="links">
                    <li className="link-list-item">
                    <div className="nav-icon">
                        <Link className={`ll-item ${location.pathname==='/'?"active-nav":""}`} to="/">
                        {location.pathname==='/' ? <img src={homeActive} alt="" className="icon"/>:<img src={home} alt="" className="icon"/>}
                            Home
                        </Link>
                        </div>
                    </li>
                    {localStorage.getItem('token') && <li className="link-list-item">
                    <div className="nav-icon">
                        <Link className={`ll-item ${location.pathname==='/profile'?"active-nav":""}`} to="/profile">
                        {location.pathname==='/profile' ? <img src={profileActive} alt="" className="icon"/>:<img src={profile} alt="" className="icon"/>}
                            Profile
                        </Link>
                        </div>
                    </li>}
                    <li className="link-list-item">
                        <div className="nav-icon">
                            <Link className={`ll-item ${location.pathname==='/about'?"active-nav":""}`} to="/about">
                            {location.pathname==='/about' ? <img src={aboutActive} alt="" className="icon"/>:<img src={about} alt="" className="icon"/>}
                                About
                            </Link>
                        </div>
                    </li>
                    <li className="link-list-item">
                    <div className="nav-icon">
                        <Link className={`ll-item ${location.pathname==='/contact'?"active-nav":""}`} to="/contact">
                        {location.pathname==='/contact' ? <img src={contactActive} alt="" className="icon"/>:<img src={contact} alt="" className="icon"/>}
                            Contact
                        </Link>
                        </div>
                    </li>
                    {localStorage.getItem('token') && <li className="link-list-item">
                    <div className="nav-icon">
                        <Link to="/shop" className={`ll-item ${location.pathname==='/shop'?"active-nav":""}`}>
                        {location.pathname==='/shop' ? <img src={cartActive} alt="" className="icon"/>:<img src={cart} alt="" className="icon"/>}
                            Shop
                        </Link>
                        </div>
                    </li>}
                    
                </ul>
            </div>
            {localStorage.getItem('token') ? <div className="logout">
                    <button className="logout-btn" onClick={handleLogout}>
                    <img src={logout} alt="" className="icon"/>Logout</button>
            </div> : <div className="logout">
                <Link to="/login">
                    <button className="logout-btn">
                    <img src={logout} alt="" className="icon"/>Login</button>
                </Link>
                <Link to="/register">
                    <button className="logout-btn">
                    <img src={logout} alt="" className="icon"/>Register</button>
                </Link>
            </div>}
        </div>
    )
}
