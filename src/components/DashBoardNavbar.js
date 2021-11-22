import React, {useState} from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import "../css/DashboardNavbar.css"
import about from "../Assets/Rest/About.svg" 
import home from "../Assets/Rest/Home.svg" 
import profile from "../Assets/Rest/Profile.svg"
import contact from "../Assets/Rest/Contact.svg"
import cart from "../Assets/Rest/Cart.svg"
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
                            <img src={home} alt="" className="icon"/>
                            Home
                        </Link>
                        </div>
                    </li>
                    <li className="link-list-item">
                    <div className="nav-icon">
                        <Link className={`ll-item ${location.pathname==='/profile'?"active-nav":""}`} to="/profile">
                        <img src={profile} alt="" className="icon"/>
                            Profile
                        </Link>
                        </div>
                    </li>
                    <li className="link-list-item">
                        <div className="nav-icon">
                            <Link className={`ll-item ${location.pathname==='/about'?"active-nav":""}`} to="/about">
                                <img src={about} alt="" 
                                className="icon"/>
                                {/* <About/> */}
                                About
                            </Link>
                        </div>
                    </li>
                    <li className="link-list-item">
                    <div className="nav-icon">
                        <Link className={`ll-item ${location.pathname==='/contact'?"active-nav":""}`} to="/contact">
                        <img src={contact} alt="" className="icon"/>
                            Contact
                        </Link>
                        </div>
                    </li>
                    <li className="link-list-item">
                    <div className="nav-icon">
                        <Link to="/shop" className={`ll-item ${location.pathname==='/shop'?"active-nav":""}`}>

                        <img src={cart} alt="" className="icon"/>
                            

                            Shop
                           
                        </Link>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div className="logout">
            <button className="logout-btn" onClick={handleLogout}>
            <img src={logout} alt="" className="icon"/>Logout</button>
            </div>
        </div>
    )
}
