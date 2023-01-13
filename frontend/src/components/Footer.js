import React from "react";
import logo from "../logo.svg";
import "../css/Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <div className="footer">
            <div className="layer-one">
                <div className="left">
                    <div className="logo-f">
                        <img src={logo} alt="STUTEA" className="logo-footer" />
                    </div>
                    <div className="social-media">
                        <Link to="/">
                            <i className="fab fa-facebook icon-f"></i>
                        </Link>
                        <Link to="/">
                            <i className="fab fa-twitter-square icon-f"></i>
                        </Link>
                        <Link to="/">
                            <i className="fas fa-envelope-open-text icon-f">
                                {" "}
                            </i>
                        </Link>
                        <Link to="/">
                            <i className="fab fa-instagram icon-f"></i>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <div className="toll-free">TOLL FREE : 1800-222-333</div>
                    <div className="mail-phone">
                        <div className="card-phone-f">
                        <i className="fas fa-phone phone-f"></i>
                        <div className="credetnial-f">
                        +91 98712 987212
                        </div>
                        </div>
                        <div className="card-phone-f">
                        <i className="fas fa-envelope phone-f"></i>
                        <div className="credetnial-f">
                        stutea.app@gmail.com
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layer-2">
                <div className="quick-links-heading"></div>
                <div className="quick-links"></div>
            </div>
        </div>
    );
};
