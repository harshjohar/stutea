import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import questionContext from '../Context/Questions/questionContext'
import { QuestionCard } from './QuestionCard';
export const Questions = () => {
    const context = useContext(questionContext);
    const {questions, getQuestions} = context;
    let history= useHistory();
    useEffect(()=> {
        if(localStorage.getItem("token")) {
            getQuestions();
        }
        else {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <h2>Questions</h2>
            {questions.map((question)=> {
                return <QuestionCard key={question._id} question={question}/>
            })}
        </div>
    )
}
