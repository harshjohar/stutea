import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Tag } from "./Tag";
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
            <h2 className="q-to-ans">Question: {question.question}</h2>
            <div className="answer-desc">
            <form>
            <label className="answer-status">Answered : </label>
            {question.answered ? "yes" : "no"}
            {/* <Tag value="harsh"/> */}
            <div className="tag-list-ans">
            <label className="answer-status">Tags specified :</label>
            {question.tags.map((tag) => (
                <div className="tag-list-element" key={tag}>
                    <Tag value={tag}/>
                </div>
            ))}</div>
            {/* <form> */}
            <div className="answer-to-q">
                <label htmlFor="answer" className="answer-status answer-label">Write your answer here</label>
                <div className="answer-space">
                <textarea rows="4"
                    name="answer"
                    id="answer"
                    className="answer"
                    value={answer.answer}
                    onChange={onChange}
                /></div>
            </div>
            </form>
            <button type="submit" className="addAnswer" onClick={handleSubmit}>
                Submit
            </button>
            </div>
        </div>
    );
};
