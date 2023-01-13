import React from "react";
import {ReactComponent as TagsIcon} from "../Assets/Click/Tags.svg"
import { useNavigate } from "react-router-dom";
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import {ReactComponent as AddAnswer} from "../Assets/Click/answer_purple.svg"
import { TagIcon } from "./Tags/TagIcon";
import { TagDropdown } from "./Tags/TagDropdown";
export const QuestionCardMore = (props) => {
    const {content} = props;
    let history = useNavigate();
    const id = content._id;
    const handleClick = () => {
        history(`/answer/${id}`);
    };
    return (
        <div className="ques-card">
            <div className="question-smol">
                {content.question}
            </div>
            <div className="options">
                {/* <div className="tags-opt">
                    <TagsIcon className="smol-opt" />  
                </div> */}
                <TagIcon icon={<TagsIcon/>}>
                    <TagDropdown tags={content.tags}></TagDropdown>
                </TagIcon>
                <div className="user-add-opt">
                    <ProfileIcon className="smol-opt"/>
                    <AddAnswer className="smol-opt"  onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
};
