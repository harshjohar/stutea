import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { useHistory } from "react-router-dom";
export const QuestionCard = (props) => {
    const { question } = props;
    const date = question.timestamp;
    let history = useHistory();
    const id = question._id;
    const handleClick = () => {
        history.push(`/answer/${id}`);
    };

    const host = process.env.REACT_APP_BACKEND_URL;
    const initial = {
        first: "",
        last: "",
        username: "",
        email: "",
        dp: "",
        city: "",
    };
    const [userData, setUserData] = useState(initial);
    const getUserData = async (userId) => {
        const response = await fetch(`${host}/api/user/id/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        })
        const json = await response.json();
        setUserData(json);
    };

    useEffect(() => {
        getUserData(question.user)
        return () => {
            
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className="question-card">
            <div className="card-head">
                <div className="user-pp">
                    <img src={userData.dp} alt="dp" className="pp"/>
                </div>
                <div className="card-user">
                    <div className="card-username">
                        {userData.first + " " + userData.last}
                    </div>
                    <div className="card-date">
                        {dateFormat(date, "mmmm dS, yyyy, h:MM TT")}
                    </div>
                </div>
                <div className="answer-question">
                    <button onClick={handleClick}className="qcard-btn">ANSWER</button>
                    <i className="fas fa-pen-square" onClick={handleClick}></i>
                </div>
            </div>
            <div className="ques">
            {question.question}
            </div>
            <div className="tag-footer">
            {question.tags.map((tag) => (
                <div className="ques-card-tag" key={tag}>
                    {tag}
                </div>
            ))}
            </div>
        </div>
    );
};
