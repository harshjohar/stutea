import React, {useState} from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import "../css/DashboardNavbar.css"
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
                            Home
                        </Link>
                    </li>
                    <li className="link-list-item">
                        <Link className={`ll-item ${location.pathname==='/profile'?"active-nav":""}`} to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="link-list-item">
                        <Link className={`ll-item ${location.pathname==='/about'?"active-nav":""}`} to="/about">
                            About
                        </Link>
                    </li>
                    <li className="link-list-item">
                        <Link className={`ll-item ${location.pathname==='/contact'?"active-nav":""}`} to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="link-list-item">
                        <Link to="/shop" className={`ll-item ${location.pathname==='/shop'?"active-nav":""}`}>
                            Shop
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="logout-btn">
            <button className="login-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
