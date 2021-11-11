import React from "react";
import { Link } from "react-router-dom";

export const MyQuesCardDash = (props) => {
    const { question } = props;
    return (
        <div>
            <Link className="question-click" to={`/view/${question._id}`}>
                {question.question}
            </Link>
        </div>
    );
};
