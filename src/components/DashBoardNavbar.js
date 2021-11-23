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
import login from "../Assets/Click/Login.svg"
import register from "../Assets/Click/Register.svg"

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
                            <Link className={`ll-item ${location.pathname==='/'?"active-nav":""}`} to="/">
                    <div className="nav-icon">
                                {location.pathname==='/' ? <img src={homeActive} alt="" className="icon"/>:<img src={home} alt="" className="icon"/>}
                        </div>
                                <div className={`nav-text${location.pathname==='/'?"-active":""}`}>Home</div>
                            </Link>
                    </li>
                    {localStorage.getItem('token') && <li className="link-list-item">
                        <Link className={`ll-item ${location.pathname==='/profile'?"active-nav":""}`} to="/profile">
                    <div className="nav-icon">
                        {location.pathname==='/profile' ? <img src={profileActive} alt="" className="icon"/>:<img src={profile} alt="" className="icon"/>}
                        </div>
                        <div className={`nav-text${location.pathname==='/profile'?"-active":""}`}>
                            Profile
                        </div>
                        </Link>
                    </li>}
                    <li className="link-list-item">
                            <Link className={`ll-item ${location.pathname==='/about'?"active-nav":""}`} to="/about">
                        <div className="nav-icon">
                                {location.pathname==='/about' ? <img src={aboutActive} alt="" className="icon"/>:<img src={about} alt="" className="icon"/>}
                        </div>
                                <div className={`nav-text${location.pathname==='/about'?"-active":""}`}>About</div>
                                    
                            </Link>
                    </li>
                    <li className="link-list-item">
                        <Link className={`ll-item ${location.pathname==='/contact'?"active-nav":""}`} to="/contact">
                    <div className="nav-icon">
                        {location.pathname==='/contact' ? <img src={contactActive} alt="" className="icon"/>:<img src={contact} alt="" className="icon"/>}
                        </div>
                            <div className={`nav-text${location.pathname==='/contact'?"-active":""}`}>Contact</div>
                        </Link>
                    </li>
                    {localStorage.getItem('token') && <li className="link-list-item">
                        <Link to="/shop" className={`ll-item ${location.pathname==='/shop'?"active-nav":""}`}>
                    <div className="nav-icon">
                        {location.pathname==='/shop' ? <img src={cartActive} alt="" className="icon"/>:<img src={cart} alt="" className="icon"/>}
                        </div>
                            <div className={`nav-text${location.pathname==='/shop'?"-active":""}`}>Shop</div>
                        </Link>
                    </li>}
                    
                </ul>
            </div>
            {localStorage.getItem('token') ? <div className="logout">
                    <button className="logout-btn" onClick={handleLogout}>
                    <div className="nav-icon">
                    <img src={logout} alt="" className="icon"/></div>
                    <div className="nav-text-active">Logout</div></button>
            </div> : <div className="logout">
                <Link className="ll-item"  to="/login" style={location.pathname==='/login'?{display: "none"}:{display: "inline"}}>
                    <button className="logout-btn">
                    <div className="nav-icon">
                    <img src={login} alt="" className="icon"/></div>
                    <div className="nav-text-active">Login</div></button>
                </Link>
                <Link className="ll-item" to="/register" style={location.pathname==='/register'?{display: "none"}:{display: "inline"}}>
                    <button className="logout-btn">
                    <div className="nav-icon">
                    <img src={register} alt="" className="icon"/></div>
                    <div className="nav-text-active">Register</div></button>
                </Link>
            </div>}
        </div>
    )
}
