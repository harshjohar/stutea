import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import dateFormat from "dateformat";
import { Tag } from "./Tag";
import Axios from "axios";
import "../css/Answer.css";
// import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
import { ReactComponent as NotifIconActive } from "../Assets/Click/Notification.svg";
import { ReactComponent as CreditIcon } from "../Assets/Click/Credits.svg";
import { ReactComponent as ProfileIcon } from "../Assets/Click/Profile.svg";
import { NavItem } from "./Notifications/NavItem";
import { Dropdown } from "./Notifications/Dropdown";
import PropTypes from 'prop-types';
import { Switch } from "@mui/material";
export const Answer = (props) => {
    const { quesid } = useParams();
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useNavigate();
    const init = {
        answer: "",
    };
    const initQ = {
        _id: "",
        user: "",
        question: "",
        tags: [],
    };
    // const initU = {
    //     first: "",
    //     last: "",
    //     username: "",
    //     email: "",
    //     dp: "",
    //     city: "",
    // }
    const [date, setdate] = useState("");
    const [answer, setAnswer] = useState(init);
    const [question, setQuestion] = useState(initQ);
    const [imageFile, setimageFile] = useState(null);
    const [imgString, setImgString] = useState("");
    const [uploaded, setUploaded] = useState(false);
    const [hidden, setHidden] = useState(true);

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageFile[0]);
        formData.append("upload_preset", "project-stutea");
        Axios.post(
            "https://api.cloudinary.com/v1_1/stutea/image/upload",
            formData
        ).then((res) => {
            // console.log(res);
            setImgString(res.data.url);
            setUploaded(true);
        });
    };
    // const [user, setUser] = useState(initU);
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
        setdate(json.timestamp);
    };

    // const getUserDetails = async()=>{
    //     const response = await fetch(`${host}/api/user/id/${question.user}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": localStorage.getItem("token"),
    //         }
    //     });
    //     const json=await response.json();
    //     setUser(json);
    // }

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
                image: imgString,
            }),
        });
        response.json();
        setAnswer(init);
        history("/");
    };

    const onChange = (e) => {
        setAnswer({ ...answer, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getDetails = async () => {
            await getQuestionDetails();
            // await getUserDetails();
        };
        if (localStorage.getItem("token")) {
            getDetails();
        } else {
            history("/login");
        }
        // eslint-disable-next-line
    }, []);
    const handleClickHidden = () => {
        setHidden(!hidden);
    }

    return (
        <div className="answer-main dark-text">
            <div className="top-icons">
                {/* <NotifIconActive className='icon-top'/> */}
                <NavItem icon={<NotifIconActive />}>
                    <Dropdown type="notif"></Dropdown>
                </NavItem>
                <NavItem icon={<CreditIcon />}>
                    <Dropdown type="credits"></Dropdown>
                </NavItem>
                <Link to="/profile">
                    <ProfileIcon className="icon-top" />
                </Link>
                <div style={{marginTop:"15px"}}>
                    <Switch onChange={props.toggleTheme} defaultValue = {"light"} checked={props.theme === "dark"} className="m-[10px] sm:m-0" />
                </div>
            </div>
            <div className="q-to-ans">
                <div className="q q-dark">Question: </div>
                <div className="q-ques">{question.question}</div>
            </div>
            <div className="user-deets">
                {/* <div className="name">

                {user.first+' '+user.last}
                </div> */}
                <div className="date-ques asked">
                    {date ? dateFormat(date, "mmmm dS, yyyy, h:MM TT") : ""}
                </div>
            </div>
            <button className={"btn-hidden"} onClick={handleClickHidden}><i className="fas fa-eye"></i></button>
            <div className="ques-img">
                {question.image && !hidden && (
                    <img
                        src={question.image}
                        alt="hehe"
                        className="ques-img-image"
                    />
                )}
            </div>
            <div className="answer-desc">
                <form>
                    {/* <Tag value="harsh"/> */}
                    <div className="tag-list-ans">
                        <label className="answer-status">
                            Tags specified :
                        </label>
                        {question.tags.map((tag) => (
                            <div className="tag-list-element" key={tag}>
                                <Tag value={tag} />
                            </div>
                        ))}
                    </div>

                    <div className="ques-area-status">
                        <label htmlFor="answer" className="upload-ques-label">
                            Write your answer here :
                        </label>
                        <div className="ques-inputs">
                            <textarea
                                rows="4"
                                name="answer"
                                id="answer"
                                className="question"
                                value={answer.answer}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="img-upload-area">
                        <div className="ques-inputs">
                            <input
                                type="file"
                                id="imgString"
                                className="tagString"
                                onChange={(e) => {
                                    setimageFile(e.target.files);
                                }}
                            />
                        </div>
                        <div className="btn-upload">
                            <button
                                type="button"
                                className="btn-upload-img btn-dark"
                                onClick={uploadImage}
                            >
                                Upload Image
                            </button>
                            {uploaded ? "Image Uploaded" : ""}
                        </div>
                    </div>
                </form>
                <div className="submit-btn">
                    <button
                        type="submit"
                        className="add-ques-btn btn-dark"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
