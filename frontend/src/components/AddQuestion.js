import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/Dashboard.css";
import "../css/AddQuestion.css";
import Axios from "axios";
// import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
import { ReactComponent as NotifIconActive } from "../Assets/Click/Notification.svg";
import { ReactComponent as CreditIcon } from "../Assets/Click/Credits.svg";
import { ReactComponent as ProfileIcon } from "../Assets/Click/Profile.svg";
import { NavItem } from "./Notifications/NavItem";
import { Dropdown } from "./Notifications/Dropdown";

export const AddQuestion = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const init = {
        question: "",
    };
    let history = useNavigate();
    const [question, setQuestion] = useState(init);
    const [tagString, setTagString] = useState("");
    const [imageFile, setimageFile] = useState(null);
    const [imgString, setImgString] = useState("");
    const [uploaded, setUploaded] = useState(false);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
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
    const addQuestion = async () => {
        // api call
        let arr = tagString.split(/[ ,]+/);
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(capitalizeFirstLetter(arr[i]));
        }
        const response = await fetch(`${host}/api/questions/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                question: question.question,
                tags: newArr,
                image: imgString,
            }),
        });
        response.json();
        setQuestion(init);
        setTagString("");
        // uploadImage();
    };
    const handleClick = (e) => {
        e.preventDefault();
        addQuestion();
        setQuestion(init);
        history("/");
    };
    const onChange = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value });
    };
    const onChangeTags = (e) => {
        setTagString(e.target.value);
    };
    return (
        <div className="upload-ques dark-text">
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
            </div>
            <h2 className="upload-ques-heading">Upload your question</h2>
            <form className="upload-ques-form">
                <div className="instruction">
                    Each question costs 50 credits which are deducted as soon as
                    you submit your question.
                </div>
                <div className="ques-area">
                    <label htmlFor="question" className="upload-ques-label">
                        Question
                    </label>
                    <div className="ques-inputs">
                        <textarea
                            placeholder="Type your question here"
                            rows="4"
                            name="question"
                            id="question"
                            className="question"
                            value={question.question}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="tags-area">
                    <label htmlFor="tagString" className="upload-ques-tags">
                        Tags
                    </label>
                    <div className="ques-inputs">
                        <input
                            placeholder="Enter comma-separated tags"
                            type="text"
                            name="tagString"
                            id="tagString"
                            className="tagString"
                            value={tagString}
                            onChange={onChangeTags}
                        />
                    </div>
                </div>
                <div className="img-upload-area">
                    <div className="ques-inputs-not">
                        <input
                            type="file"
                            id="imgString"
                            className="tagString-not"
                            onChange={(e) => {
                                setimageFile(e.target.files);
                            }}
                        />
                    </div>
                    <div className="btn-upload">
                        <button
                            type="button"
                            className="btn-upload-img"
                            onClick={uploadImage}
                        >
                            Upload Image
                        </button>
                        {uploaded ? "Image Uploaded" : ""}
                    </div>
                </div>
                <div className="submit-btn">
                    <button
                        type="submit"
                        className="add-ques-btn"
                        onClick={handleClick}
                    >
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
};
