import React from 'react'
import dateFormat from 'dateformat';
import {useHistory} from 'react-router-dom';
export const QuestionCard = (props) => {
    const {question} = props;
    const date = question.timestamp;
    let history = useHistory();
    const id = question._id;
    const handleClick = () => {
        history.push(`/answer/${id}`);
    }
    return (
        <div>
            {question.question}
            {dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            {question.tags.map((tag) => 
               <div className="tag" key={tag}>
                   {tag}
               </div>
            )}
            <div className="answer-question">
                <button onClick={handleClick}>Answer this Question</button>
            </div>
        </div>
    )
}
