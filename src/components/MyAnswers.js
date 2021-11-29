import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MyAnsCard } from "./MyAnsCard";

export const MyAnswers = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useHistory();
    const [answers, setAnswers] = useState([]);
    const [pgCountAns, setPgCountAns] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [questions, setQuestions] = useState([]);
    const emptyQues = {
        user: "",
        question: "No Questions",
        timestamp: "",
        answered: false,
        tags: [],
        responded: false
    }
    const getMyAnswers = async(pg) =>{
        const response = await fetch(`${host}/api/answers/user`,{
            method: "POST" ,
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                page: pg,
            }),
        });
        const json = await response.json();
        console.log(json)
        setAnswers(json.answers);
        const pgs = json.count;
        setPgCountAns(Math.ceil(pgs / 6));
        
    }
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getMyAnswers(1)
        }
        else {
            history.push('/login');
        }
        return () => {
            setAnswers([])
        }
    }, [])
    return (
        <div className="my-questions">
            <h2 className="my-q-head">My Answers</h2>
            <div className="own-ques">
            {answers.map((answer) => {
                return <MyAnsCard key={answer._id} answer={answer} />;
            })}
            </div>
        </div>
    )
}
