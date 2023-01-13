import React, {useState} from 'react'
import dateFormat from 'dateformat';
import { useNavigate } from 'react-router-dom';
import { TagIcon } from "./Tags/TagIcon";
import { TagDropdown } from "./Tags/TagDropdown";
// import {ReactComponent as TagsIcon} from "../Assets/Click/Tags.svg"
import {ReactComponent as Tyellow} from "../Assets/Click/TagsYellow.svg"
import {ReactComponent as Tmag} from "../Assets/Click/TagsMagenta.svg"
import {ReactComponent as Tgreen} from "../Assets/Click/TagsGreen.svg"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
export const MyQuestionCard = (props) => {
    const {question} = props;
    const date = question.timestamp;
    let history = useNavigate();
    const [deleted, setDeleted] = useState(false)
    const host = process.env.REACT_APP_BACKEND_URL;
    const resolvedClick = async () => {
        const response = await fetch(`${host}/api/questions/deleteques/${question._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })

        await response.json();
        setDeleted(true);
    }
    const confirmationDelete = () =>{
        confirmAlert({
            title : 'Confirm Deletion',
            message : 'Are you sure you want to delete this question?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => resolvedClick()
              }, 
              {
                  label: 'No',
                  onClick: ()=> history('/profile')
              }
            ]
          });

    }
    const viewAnswerClick = async () => {
        history(`/view/${question._id}`)
    }
    return (
        <div className={`my-q-card ${question.responded?"yellow-q":""} ${question.answered?"green-q":""}`} style={deleted?{display:'none'}:{}}> 
            <div className="card-content">
                <div className="my-q">
                    {question.question}
                </div>
                <div className={`date-ques ${(question.responded && !(question.answered))?"yellow-date":""}`}>
                    {question.user && dateFormat(date, "dddd, mmmm dS, yyyy")}
                </div>
                </div>
            <div className="my-q-tags">
                <TagIcon icon = {question.answered ? <Tgreen/> : (question.responded ? <Tyellow/> : <Tmag/>)}>
                    <TagDropdown tags={question.tags} disabled={true}></TagDropdown>
                </TagIcon>
                
                {question.user && <div className="answer-question">
                    <button className={`view-ans ${question.responded?"yellow-q":"magenta-q"} ${question.answered?"green-q":"magenta-q"}`} onClick={confirmationDelete}><i className="fas fa-trash"></i></button>
                    <button className={`view-ans ${question.responded?"yellow-q":"magenta-q"} ${question.answered?"green-q":"magenta-q"}`} onClick={viewAnswerClick}><i className="fas fa-eye"></i></button>
                </div>}
            </div>
        </div>
    )
}
