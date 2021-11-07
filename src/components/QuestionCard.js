import React from 'react'
// import dateFormat from 'dateformat';
export const QuestionCard = (props) => {
    const {question} = props;
    const date = question.timestamp;
    return (
        <div>
            {question.question}
            {/* {dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")} */}
        </div>
    )
}
