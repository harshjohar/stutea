import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyQuesCardDash } from './MyQuesCardDash';

export const MyQuestionDashboard = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useNavigate(); 
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
        setQuestions(json.myQuestions);
    };
    useEffect(() => {
        if(localStorage.getItem("token")) {
            getMyQuestions(1);
        }
        else {
            history('/login');
        }
        // eslint-disable-next-line
    }, [])

    const handleClick = () => {
        history("/profile");
    }
    return (
        <div>
            <h3>Recently asked</h3>
            <div className="my-recents">
            {questions.slice(0, 5).map((question)=> {
                return <MyQuesCardDash key={question._id} question={question} />
            })}
            </div>
            <div className="see-all">
            <button onClick={handleClick} className="see-all-btn">See All</button>
            </div>
        </div>
    )
}
