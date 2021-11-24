import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import { Tag } from "./Tag";
import  '../css/Answer.css'
import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
// import {ReactComponent as NotifIconActive} from "../Assets/Click/Notification.svg"
import {ReactComponent as CreditIcon} from "../Assets/Click/Credits.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import { NavItem } from './Notifications/NavItem';
import { Dropdown } from './Notifications/Dropdown';
export const Answer = () => {
    const { quesid } = useParams();
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useHistory();
    const init = {
        answer: "",
    };
    const initQ = {
        _id: "",
        user: "",
        question: "",
        tags: [],
    };
    const [answer, setAnswer] = useState(init);
    const [question, setQuestion] = useState(initQ);
    const getQuestionDetails = async () => {
        const response = await fetch(`${host}/api/questions/getquestion`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                quesid,
            }),
        });
        const json = await response.json();
        setQuestion(json);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // api call
        const response = await fetch(`${host}/api/answers/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                question: quesid,
                answer: answer.answer,
            }),
        });
        response.json();
        setAnswer(init);
        history.push("/");
    };

    const onChange = (e) => {
        setAnswer({ ...answer, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getQuestionDetails();
        } else {
            history.push("/login");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="answer-main">
            <div className="top-icons">
                    {/* <NotifIconActive className='icon-top'/> */}
                    <NavItem icon={<NotifIcon/>}>
                        <Dropdown type="notif"></Dropdown>
                    </NavItem>
                    <NavItem icon={<CreditIcon/>}>
                        <Dropdown type="credits"></Dropdown>
                    </NavItem>
                    <Link to="/profile">
                    <ProfileIcon className="icon-top"/>
                    </Link>
            </div>
            <div className="q-to-ans">
                <div className="q">Question: </div>
                <div className="q-ques">{question.question}</div>
            
            </div>
            <div className="answer-desc">
            <form>
            
            {/* <Tag value="harsh"/> */}
            <div className="tag-list-ans">
            <label className="answer-status">Tags specified :</label>
            {question.tags.map((tag) => (
                <div className="tag-list-element" key={tag}>
                    <Tag value={tag}/>
                </div>
            ))}</div>

            
        
            <div className="ques-area-status">
                <label htmlFor="answer" className="upload-ques-label">Write your answer here :</label>
                <div className="ques-inputs">
                <textarea rows="4"
                    name="answer"
                    id="answer"
                    className="question"
                    value={answer.answer}
                    onChange={onChange}
                /></div>
            </div>
            </form>
            <div className="submit-btn">
            <button type="submit" className="add-ques-btn" onClick={handleSubmit}>
                Submit
            </button>
            </div>
            </div>
        </div>
    );
};
