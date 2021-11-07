import React from 'react'

export const MyQuestionCard = (props) => {
    const {question} = props;
    return (
        <div>
            {question.question}
        </div>
    )
}
