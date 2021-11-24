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
            <h2>{question.question}</h2>
            {question.answered ? "yes": "no"}
            {question.tags.map((tag)=>
                <div className="tag" key={tag}>
                    {tag}
                </div>
            )}
            <h3>Answer</h3>
            {answer.answer ? answer.answer : answer.error}
            {answer.answer && !(answer.rating) && <Feedback question={question}/> }
            {answer.rating!==0 && <div>stars: {answer.rating}</div>}
        </div>
    )
}
