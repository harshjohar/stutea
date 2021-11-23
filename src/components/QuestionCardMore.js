import React from "react";
import {ReactComponent as TagsIcon} from "../Assets/Click/Tags.svg"
import { useHistory, Link } from "react-router-dom";
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import {ReactComponent as AddAnswer} from "../Assets/Click/answer_purple.svg"
export const QuestionCardMore = (props) => {
    const {content} = props;
    let history = useHistory();
    const id = content._id;
    const handleClick = () => {
        history.push(`/answer/${id}`);
    };
    return (
        <div className="ques-card">
            <div className="question-smol">
                {content.question}
            </div>
            <div className="options">
                <div className="tags-opt">
                    <TagsIcon className="smol-opt" />
                </div>
                <div className="user-add-opt">
                    <ProfileIcon className="smol-opt"/>
                    <AddAnswer className="smol-opt"  onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
};
