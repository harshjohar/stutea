import React from "react";
import "../css/LandingPage.css";
import {useNavigate} from 'react-router-dom'
import {ReactComponent as Doubt} from "../Assets/LANDING PAGE/Doubt.svg"
import {ReactComponent as Concept} from "../Assets/LANDING PAGE/Concept.svg"
import {ReactComponent as Credits} from "../Assets/LANDING PAGE/Credit.svg"
import {ReactComponent as TagIt} from "../Assets/LANDING PAGE/TagIt.svg"
import { ReactComponent as AboutImg } from "../Assets/LANDING PAGE/AboutLanding.svg";
const LandingPage = () => {
	let history = useNavigate();
	const redirectRegister = ()=> {
		history('/register')
	}
    const redirectLogin = ()=>{
        history('/login')
    }
    return (
        <div className="parent-landing dark-text">
            <div className="banner">
                <div className="heading-banner">
                    <div className="big-heading dark-text">
                        The best doubt<br/> management<br/> tool
                    </div>
                    <div className="smol-text">
                        Upload your doubts easily with the interactive user
                        friendly interface
                    </div>
                    <div className="register-btn-banner">
                        <button className="register-button-lp" onClick={redirectRegister}>Register</button>
                        <button className="register-button-lp" onClick={redirectLogin}>Login</button>
                    </div>
                </div>
                <div className="banner-img">
					<Doubt className="doubt-graphic"/>
				</div>
            </div>
            <div className="features">
                <div className="features-heading">Our features</div>
                <div className="cards-lp">
                    <div className="card-lp">
                        <div className="img-card-lp">
							<Concept className="card-img"/>
						</div>
                        <div className="heading-card-lp">Concept</div>
                        <div className="text-card-lp">
                            Get your doubts answered and strengthen your concepts
                        </div>
                    </div>
                    <div className="card-lp">
                        <div className="img-card-lp">
							<Credits className="card-img"/>
						</div>
                        <div className="heading-card-lp">Earn Credits</div>
                        <div className="text-card-lp">
                            Earn credits by solving and helping others with
                            their doubts.
                        </div>
                    </div>
                    <div className="card-lp">
                        <div className="img-card-lp">
							<TagIt className="card-img"/>
						</div>
                        <div className="heading-card-lp">Tag it!</div>
                        <div className="text-card-lp">
                            Tagging feature allows to search for
                            the question easily.
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-lp">
				<div className="about-img-lp">
					<AboutImg className="about-img"/>
				</div>
                <div className="about-content-lp">
                <div className="heading-about-lp">About Us</div>
                    <div className="about-text-lp">
                        We aim to create an online education ecosystem through
                        our product that enables various types of education
                        seekers to optimize the benefits of online learning and
                        development among the peers.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
