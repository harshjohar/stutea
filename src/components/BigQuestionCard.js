import React from 'react'
import {ReactComponent as AddQuesGreen} from "../Assets/Click/answer_green.svg"
import {ReactComponent as AddQuesMagenta} from "../Assets/Click/answer_magenta.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import "../css/BigQuestionCard.css"
export const BigQuestionCard = (props) => {
    const {color}=props
    return (
        <div className={`big-ques-card-${color}`}>
            <div className={`question-${color}`}>
                Suffering to evade suffering, pain to circumvent pain, why if life the way it is? Why is life so ironical?
            </div>
            <div className="tags">
                <div className={`tag-${color}`}>Life</div>
                <div className={`tag-${color}`}>Philosophy</div>
            </div>
            <div className="details">
                <div className="user">
                    <div className="user-dp-ques">
                        <ProfileIcon className="profile-pic-ques"/>
                    </div>
                    <div className="user-name-ques">
                        <div className="name-ques">
                            Harsh Johar
                        </div>
                        <div className="date-ques">
                            22 Nov, 2021
                        </div>
                    </div>
                </div>
                <div className="answer-button-big">
                    {color==='green' ? <AddQuesGreen className="btn-add"/>: <AddQuesMagenta className='btn-add'/>}

                </div>
            </div>
        </div>
    )
}
