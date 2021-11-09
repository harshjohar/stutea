import React from "react";
import "../css/LandingPage.css";
import img from "../Assets/hihihi.jpg";
// import img1 from "../Assets/png.png";
const LandingPage = () => {
  return (
    <div>
      <div className="intro-content">
        <h1>Hello folks</h1>
        <h2>Welcome To StuTea</h2>
      </div>
      <div className="features-content">
        <h1>Best Doubt Management Tool</h1>
        <div className="features">
          <div className="left-side">
            <ul>
              <li>
                <h3>Easy to use</h3>
                <p>
                  Upload your doubts easily with the interactive user friendly
                  interface
                </p>
              </li>
              <li>
                <h3>Build your concepts</h3>
                <p>Get your doubts answered ans strngthen your concepts</p>
              </li>
              <li>
                <h3>Attracting feature</h3>
                <p>
                  Everyone in the same boat, no professional teachers involved,
                  you get professional as you solve others doubt
                </p>
              </li>
            </ul>
          </div>
          <div className="middle-side">
            <img src={img} alt="Harshu" />
          </div>
          <div className="right-side">
            <ul>
              <li>
                <h3>Tag It!</h3>
                <p>
                  StuTea's tagging feature allows others to search for the
                  question they are looking for easily
                </p>
              </li>
              <li>
                <h3>Earn Credits</h3>
                <p>
                  Earn credits by solving and helping others with their doubts,
                  meanwhile enriching your concepts too.
                </p>
              </li>
              <li>
                <h3>Learn and Earn</h3>
                <p>
                  Redeem your credits to buy goodies, merchandise and many other
                  exciting stuff
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-img">
          <img src={img} alt="img"/>
        </div>
        <div className="about">
          <h1>About StuTea</h1>
          <p>
            We aim to create an online education ecosystem through our product
            that enables various types of education seekers to optimize the
            benefits of online learning and development among the peers
          </p>
        </div>
      </div>
      <div className="impact-content">
        <div className="impact">
          <div className="impact-img">
            <img src={img} alt="img"/>
          </div>
          <h2>High Impact Learning</h2>
          <p>
            StuTea helps you in enriching your concepts with varied question
            ranging in all the topics known. This enables student to get access
            of the high quality learning and development among the peers.
          </p>
        </div>
      </div>
      <div className="credit-content">
        <div className="credit-img">
          <img src={img} alt="img"/>
        </div>
        <div className="credit">
          <h2>Hello!</h2>
          <p>
            Browse your credits exchange store
            <strong>
              Choose from hundreds of offers and schemes to redeem and purchase
              credits from our online store
            </strong>
          </p>
        </div>
      </div>
      <div className="contact-content">
        <h1>Get in Touch!</h1>
        <div className="contact">
          <div className="other-contact">
            <p>
              Feel free to get in touch with us. We are always open to
              discussing new projects, creative ideas or oppurtunities to be
              part of your vision
            </p>
            <i className="fas fa-envelope-open-text"></i>
            <p>Mail Us info@gmail.com</p>
            <i className="fas fa-phone-volume"></i>
            <p>Call us at +91 9897198971</p>
          </div>
          <div className="contact-form">
            <form>
              <div className="form">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your valid email"
                />
              </div>
              <div className="form msg">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your message"
                />
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
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

export default LandingPage;
