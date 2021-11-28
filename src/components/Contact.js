import React from "react";
import "../css/Contact.css";
const Contact = () => {
    return (
        <div className="parent-contact">
            <div className="heading-contact">Contact Us</div>
            <div className="main-contact">
                <div className="address-box">
                    <div className="address-heading">Address</div>
                    <div className="details-address">
                        <div className="hostel address-detail">
                            <div className="icon-contact">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="desc-contact">
                                Aravali Hostel, Chandigarh
                            </div>
                        </div>
                        <div className="pin-code address-detail">
                            <div className="icon-contact">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="desc-contact">151001</div>
                        </div>
                        <div className="mail address-detail">
                            <div className="icon-contact">
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <div className="desc-contact">
                                Mail Us stutea.app@gmail.com
                            </div>
                        </div>
                        <div className="call-us address-detail">
                            <div className="icon-contact">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <div className="desc-contact">
                                Call us at +91 9897198971
                            </div>
                        </div>
                    </div>
                    <div className="officers">
                        <div className="detail-owner">
                            <div className="detail-owner-heading">Name:</div>
                            <div className="detail-owner-value">
                                Harshpreet Singh Johar
                            </div>
                        </div>
                        <div className="detail-owner">
                            <div className="detail-owner-heading">
                                Designation:
                            </div>
                            <div className="detail-owner-value">
                                Team Leader
                            </div>
                        </div>
                        {/* <div className="detail-owner">
                            <div className="icon-contact detail-owner-heading">
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <div className="detail-owner-value">
                                harshpreetsinghjohar.btcse20@pec.edu.in
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="general-box">
                    <div className="general-box-heading">General Enquiry</div>
                    <form className="contact-form">
                        <div className="name-contact form-group">
                            <input
                                type="text"
                                name="first"
                                id="first"
                                className="first form-input-contact"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                name="last"
                                id="last"
                                className="last form-input-contact"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="email form-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="email form-input-contact"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className="contact form-group">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="phone form-input-contact"
                                placeholder="Contact Number"
                            />
                        </div>
                        <div className="message form-group">
                            <input
                                type="text"
                                name="message"
                                id="message"
                                className="message form-input-contact"
                                placeholder="Enter Your Message"
                            />
                        </div>
                    </form>
                    <div className="submit-btn-contact">
                        <button className="contact-submit-btn">Submit</button>
                    </div>
                </div>
            </div>
            <div className="follow-us">
              <div className="heading-follow-us">
                Follow us
              </div>
              <div className="icons-contact-pg">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fas fa-envelope-open-text"> </i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
        </div>
    );
};

export default Contact;
