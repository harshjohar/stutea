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
        <div style={{ display: "flex", marginTop: '9px'}}>
          <Link className="navbar-brand" to="/">
            StuTea
          </Link>
          {!localStorage.getItem('token')?<div>
            <ul style={{ display: "flex", marginTop: '9px'}}>
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
          </div>:<button onClick={logout}>
                  Logout
                  </button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
