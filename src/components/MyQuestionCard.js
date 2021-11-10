import React from 'react'
import dateFormat from 'dateformat';
import { useHistory } from 'react-router-dom';
export const MyQuestionCard = (props) => {
    const {question} = props;
    const date = question.timestamp;
    let history = useHistory();
    const resolvedClick = async () => {

    }

    const viewAnswerClick = async () => {
        history.push(`/view/${question._id}`)
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
                <button onClick={resolvedClick}>Resolved</button>
                <button onClick={viewAnswerClick}>View Answer</button>
            </div>
        </div>
    )
}
