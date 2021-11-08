import React, {  useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { MyQuestionCard } from './MyQuestionCard';

export const MyQuestions = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useHistory();
    const [page, setPage] = useState(1); 
    const [questions, setQuestions] = useState([]);
    // Get Own Questions
    const getMyQuestions = async (pg) => {
        // api call
        const response = await fetch(`${host}/api/questions/fetchuser`, {
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
    useEffect(() => {
        if(localStorage.getItem("token")) {
            getMyQuestions(page);
        }
        else {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className="my-questions">
            <h2>My Questions</h2>
            {questions.map((question)=> {
                return <MyQuestionCard key={question._id} question={question}/>
            })}
        </div>
    )
}
