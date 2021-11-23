import React, {  useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import "../css/Dashboard.css"
import "../css/AddQuestion.css"
import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
// import {ReactComponent as NotifIconActive} from "../Assets/Click/Notification.svg"
import {ReactComponent as CreditIcon} from "../Assets/Click/Credits.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import { NavItem } from './Notifications/NavItem';
import { Dropdown } from './Notifications/Dropdown';

export const AddQuestion = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const init = {
        question: ""
    }
    let history=useHistory();
    const [question, setQuestion] = useState(init);
    const [tagString, setTagString] = useState("");
    const addQuestion = async () => {
        // api call
        let arr =  tagString.split(',');
        const response = await fetch(`${host}/api/questions/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                "question": question.question, 
                "tags": arr
            })
        });
        response.json();
        setQuestion(init);
        setTagString("");
    }
    const handleClick = (e) => {
        e.preventDefault();
        addQuestion();
        setQuestion(init);
        history.push("/");
    }
    const onChange = (e)=> {
        setQuestion({...question, [e.target.name]: e.target.value});
    }
    const onChangeTags = (e)=> {
        setTagString(e.target.value);
    }
    return (
        <div className="upload-ques">
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
                    {/* <img src={Settings} alt="" className="icon-top"/> */}
                    <i className="fas fa-cog icon-top"></i>
            </div>
                <h2 className="upload-ques-heading">Upload your question</h2>
                <form className="upload-ques-form">
                    <div className="instruction">Each question costs 50 credits which are deducted as soon as you submit your question.</div>
                    <div className="ques-area">
                        <label htmlFor="question" className="upload-ques-label">Question</label>
                        <div className="ques-inputs">
                            <textarea placeholder="Type your question here" rows="4" name="question" id="question" className="question"value={question.question} onChange={onChange} />
                        </div>
                    </div>
                    <div className="tags-area">
                        <label htmlFor="tagString" className="upload-ques-tags">Tags</label>
                        <div className="ques-inputs">
                            <input placeholder="Enter comma-separated tags" type="text" name="tagString" id="tagString" className="tagString" value={tagString} onChange={onChangeTags} />
                        </div>
                    </div>
                    <div className="submit-btn">
                    <button type="submit" className="add-ques-btn" onClick={handleClick}>Upload</button>
                    </div>
                </form>
        </div>
    )
}
