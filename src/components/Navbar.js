import React from "react";
// import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
const Navbar = () => {
  let history = useHistory();
  const logout = ()=> {
    localStorage.removeItem('token')
    history.push('/login')
  }
  return (
    <>
      <nav>
        <div className="logo">
          <Link className="navbar-brand" to="/">
            StuTea
          </Link>
        </div>
        <div className="links">
          {!localStorage.getItem('token')?<div>
            <ul className="link-list">
              <li className="link-list-item">
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className="link-list-item">
                <Link to="/">
                  About
                </Link>
              </li>
              <li className="link-list-item">
                <Link to="/">
                  Contact
                </Link>
              </li>
              <li className="link-list-item">
                <Link to="/login">
                  <button className="btn-login">
                    Login
                  </button>
                </Link>
              </li>
              <li className="link-list-item">
                <Link to="/register">
                  <button className="btn-login">
                    Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>:<button className="btn-login" onClick={logout}>
                  Logout
                  </button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
