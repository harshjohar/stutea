import React, {useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.svg"
import "../css/Navbar.css"
import {FaBars,FaTimes} from "react-icons/fa"
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const Navbar = () => {
    let location = useLocation();
  let history = useNavigate();
  const handleLogout = ()=> {
    confirmAlert({
        title: "Confirmation",
        message: "Are you sure, you want to logout?",
        buttons: [
          {
            label: "Cancel",
          },
          {
            label: "Logout",
            onClick: () =>(
            localStorage.removeItem('token'),
            history("/")
            ),
          },
        ],
      }); 
  }

  const [hamburger, setHamburger] = useState(false)
  const toggle=()=>{
      setHamburger(!hamburger)
  }

  return (
    <>
    <div className="bars" onClick={toggle}>
        {!hamburger?<FaBars/>:<FaTimes/>}
    </div>
    <nav className="navbar-parent">
            <div className={`logo-wrapper`+ (hamburger ? "-ham" : "")} >
                <Link className="logo-link" to="/">
                   <img src={logo} className="stutea-logo" alt="STUTEA" />
                </Link>
            </div>
            <div className={`navbar-links`+(hamburger?"-ham":"")}>
                <ul className={`nav-item-list`+(hamburger?"-ham":"")}>
                    <li className="nav-item">
                        <Link className={`navbar-item ${location.pathname==='/'?"active":""}`} to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`navbar-item ${location.pathname==='/about'?"active":""}`} to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`navbar-item ${location.pathname==='/contact'?"active":""}`} to="/contact">
                            Contact
                        </Link>
                    </li>
                    {localStorage.getItem('token') && <li className="nav-item">
                        <Link className={`navbar-item ${location.pathname==='/profile'?"active":""}`} to="/profile">
                            Profile
                        </Link>
                    </li>}
                </ul>

                {!localStorage.getItem("token")?
                <div className="top-right">
                    <Link className={"button"} to='/login' style={location.pathname==='/login'?{display: "none"}:{display: "inline"}}>
                        <button className="btn-login">
                            Login
                        </button>
                    </Link>
                    <Link className={"button"} to='/register' style={location.pathname==='/register'?{display: "none"}:{display: "inline"}}>
                        <button className="btn-login">
                            Register
                        </button>
                    </Link>
                </div>:
                <div className="top-right">
                <button className="btn-login" onClick={handleLogout}>Logout</button>
                <Link to="/shop">
                <i className="fas fa-shopping-cart"></i>
                </Link>
                </div>
    }
            </div>
        </nav>
    </>
  )
}
