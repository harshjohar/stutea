import React from "react";
import "../css/About.css";
// import AboutImage from "../Assets/face.jpg";
import AboutImageTop from "../Assets/help.jpg";
import Jaagrit from "../Assets/developers/jaagrit.jpg"
import HarshJohar from "../Assets/developers/harshjohar.jpg"
import Kanika from "../Assets/developers/kanika.jpg"
import Simran from "../Assets/developers/simran.jpeg"
import Dhruv from "../Assets/developers/dhruv.jpeg"
// import { Link } from "react-router-dom";
export const About = () => {
    return (
        <div className="parent-about">
            <div className="about-heading">Learning and Teaching together</div>
            <div className="about-desc">
                <div className="image-about-parent">
                    <img src={AboutImageTop} alt="" className="image-about-top" />
                </div>
                <div className="text-about">
                    <p>
                        At stutea we believe in making every learner a teacher.
                        That is exactly what our name signifies! Stu-dent +
                        tea-cher.
                    </p>
                    <p>
                        We a group of college students came up with the idea of
                        providing students with a platform wherein they can post
                        their doubts and solve other students’ doubts. This
                        concept would result in quicker doubt resolution along
                        with simple solutions because the student solving doubts
                        will be having similar knowledge and resources!
                    </p>
                </div>
            </div>
            <div className="developers-heading">
              More about STUTEA developers
            </div>
            <div className="developers">
                <div className="developer-card">
                    <div className="photo-dev">
                        <img src={HarshJohar} alt="" className="image-about" />
                    </div>
                    <div className="name-dev">Harshpreet Singh Johar</div>
                    <div className="work">
                        <a href="https://github.com/harshjohar" target="_blank" rel="noreferrer">
                        <i class="fab fa-github sm-icons">
                        </i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/harshpreet-singh-johar-4a362a202/" rel="noreferrer">
                        <i class="fab fa-linkedin-in sm-icons"></i>
                        </a>
                    </div>
                </div>
                <div className="developer-card">
                    <div className="photo-dev">
                        <img src={Kanika} alt="" className="image-about" />
                    </div>
                    <div className="name-dev">Kanika Kaur</div>
                    <div className="work">
                        <a target="_blank"href="https://github.com/kanikakaur27" rel="noreferrer">
                        <i class="fab fa-github sm-icons"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/kanika-kaur-412914202/" rel="noreferrer">
                        <i class="fab fa-linkedin-in sm-icons"></i>
                        </a>
                    </div>
                    <div className="contact-dev"></div>
                </div>
                <div className="developer-card">
                    <div className="photo-dev">
                        <img src={Jaagrit} alt="" className="image-about" />
                    </div>
                    <div className="name-dev">Jaagrit Arora</div>
                    <div className="work">
                        <a target="_blank" href="https://github.com/jaagrit10" rel="noreferrer">
                        <i class="fab fa-github sm-icons"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/jaagrit-arora-71a11a201/" rel="noreferrer">
                        <i class="fab fa-linkedin-in sm-icons"></i>
                        </a>
                    </div>
                </div>
                <div className="developer-card">
                    <div className="photo-dev">
                        <img src={Simran} alt="" className="image-about" />
                    </div>
                    <div className="name-dev">Simran Gupta</div>
                    <div className="work">
                        <a target="_blank" href="https://github.com/Simrang19" rel="noreferrer">
                        <i class="fab fa-github sm-icons"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/simran-gupta-9a5b06201/" rel="noreferrer">
                        <i class="fab fa-linkedin-in sm-icons"></i>
                        </a>
                        </div>
                </div>
                <div className="developer-card">
                    <div className="photo-dev">
                        <img src={Dhruv} alt="" className="image-about" />
                    </div>
                    <div className="name-dev">Dhruv Bansal</div>
                    <div className="work">
                        <a target="_blank" href="https://github.com/Dhruv-bansal15" rel="noreferrer">
                        <i class="fab fa-github sm-icons"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/dhruv-bansal-ba2241201/" rel="noreferrer">
                        <i class="fab fa-linkedin-in sm-icons"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
