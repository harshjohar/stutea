import React, {  useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { QuestionCard } from './QuestionCard';
export const Questions = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const [questions, setQuestions] = useState([])
    const [page, setPage] = useState(1);
    let history= useHistory();
    // Get the questions
    const getQuestions = async (pg) => {
        // api call
        const response = await fetch(`${host}/api/questions/fetch`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "page": pg
            })
        });
        const json = await response.json();
        setQuestions(json);
    };
    useEffect(()=> {
        if(localStorage.getItem("token")) {
            getQuestions(page);
        }
        else {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div className="questions">
            <h2>Questions</h2>
            {questions.map((question)=> {
                return <QuestionCard key={question._id} question={question}/>
            })}
        </div>
    )
}
