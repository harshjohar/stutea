import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div style={{ display: "flex", marginTop: '9px'}}>
          <Link className="navbar-brand" to="/">
            StuTea
          </Link>
          <div >
            <ul style={{ display: "flex", marginTop: '9px'}}>
              <li className="nav-item" style={{marginLeft: '30px'}}>
                <Link to="/">
                  Home
                </Link>
              </li>
               <li style={{marginLeft: '30px'}}>
                <Link to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item" style={{marginLeft: '30px'}}>
                <Link to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
