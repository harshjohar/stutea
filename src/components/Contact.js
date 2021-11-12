import React from "react";
import "../css/Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="contact-cont">
        <h1>Contact Us</h1>
        <div className="cont">
          <div className="other-cont">
            <h3>Address</h3>
            <div>
              <i className="fas fa-home"> Aravalli Hostel , Chandigarh</i>
            </div>
            <div>
              <i className="fas fa-map-marker-alt"> 151001</i>
            </div>
            <div>
              <i className="fas fa-envelope-open-text">
                {" "}
                Mail Us info@gmail.com
              </i>
            </div>
            <div>
              <i className="fas fa-phone-volume"> Call us at +91 9897198971</i>
            </div>
            <br />
            <br />
            <div className="officer">
              <p>
                Grievance Officer appointed under the Consumer Protection (E-
                Commerce) Rules, 2020
              </p>
              <b>Name: </b>Harshpreet Johar
              <br />
              <b>Designation: </b>Team Leader
              <div>
                <i className="fas fa-envelope-open-text">
                  {" "}
                  harshpreetjohar.btcse20@pec.edu.in
                </i>
              </div>
            </div>
            <br />
            <br />
            <div className="handles">
              <h2>Follow Us</h2>
              <a href="/"><i className="fab fa-facebook"></i></a>
              <a href="/"><i className="fab fa-twitter-square"></i></a>
              <a href="/"><i className="fas fa-envelope-open-text"> </i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="cont-form">
              <br/>
            <h2>General Enquiry</h2>
            <form>
              <div className="first-last">
                <div className="forms">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First name"
              
                  />
                </div>
                <div className="forms lastname">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="forms">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your valid email"
                />
              </div>
              <div className="forms">
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter your contact no"
                />
              </div>
              <div className="forms message">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your message"
                />
              </div>
              <div className="forms">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Are you a human? 2+3= "
                />
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                />
                {"  "}I accept the <a href="/"> Terms of services </a>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
