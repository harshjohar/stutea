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
        <div>
            <img src={userData.dp} alt="dp" />
            <h4>{userData.first + " " + userData.last}</h4>
            {question.question}
            {dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            {question.tags.map((tag) => (
                <div className="tag" key={tag}>
                    {tag}
                </div>
            ))}
            <div className="answer-question">
                <button onClick={handleClick}>Answer this Question</button>
            </div>
        </div>
    );
};
