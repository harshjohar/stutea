import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import questionContext from '../Context/Questions/questionContext'
import { MyQuestionCard } from './MyQuestionCard';

export const MyQuestions = () => {
    const context = useContext(questionContext);
    const {questions, getMyQuestions} = context;
    let history = useHistory();
    useEffect(() => {
        if(localStorage.getItem("token")) {
            getMyQuestions();
        }
        else {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h2>My Questions</h2>
            {questions.map((question)=> {
                return <MyQuestionCard key={question._id} question={question}/>
            })}
        </div>
    )
}
