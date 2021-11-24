import React from "react";
import "../css/About.css";
import imag from "../Assets/help.jpg";
export const About = () => {
  return (
    <div className="parent-about">
      <h1>Learning and Teaching together</h1>
      <div className="about-intro">
        <div className="intro-left">
          <div className="intro-img">
            <img src={imag} alt="StuTea" />
          </div>
        </div>
        <div className="intro-right">
          <p>At stutea we believe in making every learner a teacher.
          That is exactly what our name signifies! Stu-dent + te-acher.</p>
          <p>
            We a group of college students came up with the idea of providing
            students with a platform wherein they can post their doubts and
            solve other students’ doubts. This concept would result in quicker
            doubt resolution along with simple solutions because the student
            solving doubts will be having similar knowledge and resources!
          </p>
        </div>
      </div>
      <div className="founder-intro">
        <h2>More about Stu-Tea developers</h2>
        <div className="founder-cards d-flex flex-wrap justify-content-between">
          <div className="card bg-secondary">
            <div>
              <img src={imag} alt="StuTea" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Harshpreet Johar</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h4>Contact me</h4>
              <div className="handles-about">
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="/">
                  <i className="fas fa-envelope-open-text"> </i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-info text-dark">
            <div>
              <img src={imag} alt="StuTea" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Harshpreet Johar</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h4>Contact me</h4>
              <div className="handles-about">
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="/">
                  <i className="fas fa-envelope-open-text"> </i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-light mb-3">
            <div>
              <img src={imag} alt="StuTea" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Harshpreet Johar</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h4>Contact me</h4>
              <div className="handles-about">
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="/">
                  <i className="fas fa-envelope-open-text"> </i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-success">
            <div>
              <img src={imag} alt="StuTea" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Harshpreet Johar</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h4>Contact me</h4>
              <div className="handles-about">
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="/">
                  <i className="fas fa-envelope-open-text"> </i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-warning text-dark">
            <div>
              <img src={imag} alt="StuTea" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Harshpreet Johar</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h4>Contact me</h4>
              <div className="handles-about">
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="/">
                  <i className="fas fa-envelope-open-text"> </i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
