import React from "react";
import {ReactComponent as Tags} from "../Assets/Click/Tags.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import {ReactComponent as AddAnswer} from "../Assets/Click/answer_purple.svg"
export const QuestionCardMore = () => {
    return (
        <div className="ques-card">
            <div className="question-smol">
                How long does it take to master full stack dev?
            </div>
            <div className="options">
                <div className="tags-opt">
                    <Tags className="smol-opt" />
                </div>
                <div className="user-add-opt">
                    <ProfileIcon className="smol-opt" />
                    <AddAnswer className="smol-opt" />
                </div>
            </div>
        </div>
    );
};
