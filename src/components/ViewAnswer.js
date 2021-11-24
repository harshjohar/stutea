import React, {useState, useEffect} from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { Feedback } from './Feedback';
import '../css/ViewAns.css'
import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
// import {ReactComponent as NotifIconActive} from "../Assets/Click/Notification.svg"
import {ReactComponent as CreditIcon} from "../Assets/Click/Credits.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import { NavItem } from './Notifications/NavItem';
import { Dropdown } from './Notifications/Dropdown';
import { Tag } from "./Tag";

export const ViewAnswer = () => {
    const {quesid} = useParams();
    let history = useHistory();
    const host = process.env.REACT_APP_BACKEND_URL;
    const init = {
        "answer": "",
        "question": ""
    }
    const initQ = {
        "_id": "",
        "user": "",
        "question": "",
        "tags": []
    }

    const [question, setQuestion] = useState(initQ);
    const [answer, setAnswer] = useState(init);

    const getQuestionDetails = async () => {
        const response = await fetch(`${host}/api/questions/getquestion`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                quesid
            })
        })
        const json = await response.json();
        setQuestion(json);
    }

    const getAnswer = async () => {
        const response = await fetch(`${host}/api/answers/fetch`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                "question": quesid
            })
        });
        const json = await response.json();
        setAnswer(json);
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
            getAnswer();
            getQuestionDetails();
        }
        else {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className="view-ans-main">
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
            {/* {question.answered ? "yes": "no"} */}
            

            <div className="tag-list-ans">
            <label className="answer-status">Tags specified :</label>
            {question.tags.map((tag) => (
                <div className="tag-list-element" key={tag}>
                    <Tag value={tag}/>
                </div>
            ))}</div>


            <div className="ques-area-status">
                <label className="upload-ques-label">Answer:</label>

                <div className="ans-to-q">
                {answer.answer ? answer.answer : answer.error}
                </div>


                {answer.answer && !(answer.rating) && <Feedback question={question} answer={answer}/> }
                {answer.rating!==0 && <div className="feedback-rating"><label className="upload-ques-label"> Rating :</label>{(answer.rating>0)?<div className="rating-given">{" "+answer.rating+"★"}</div>: " Unrated"}</div>}
            </div>
        </div>
    )
}
