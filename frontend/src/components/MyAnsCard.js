import React, {useState , useEffect} from 'react'
import dateFormat from 'dateformat';
import { useNavigate } from 'react-router-dom';
import { TagIcon } from "./Tags/TagIcon";
import { TagDropdown } from "./Tags/TagDropdown";
// import {ReactComponent as TagsIcon} from "../Assets/Click/Tags.svg"
import {ReactComponent as Tyellow} from "../Assets/Click/TagsYellow.svg"
import {ReactComponent as Tmag} from "../Assets/Click/TagsMagenta.svg"
import {ReactComponent as Tgreen} from "../Assets/Click/TagsGreen.svg"

export const MyAnsCard = (props) => {
    const {answer}=props;
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useNavigate();
    const [question, setQuestion] = useState({});
    const getQuestion = async()=>{
        const response = await fetch(`${host}/api/questions/getquestion`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                quesid: answer.question
            })
        })
        const json = await response.json();
        setQuestion(json);
    }
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getQuestion()
        }
        else {
            history('/login');
        }
        return () => {
            setQuestion({})
        }
        // eslint-disable-next-line
    }, [])
    const viewAnswerClick = async () => {
        history(`/viewmyans/${question._id}`)
    }
    return (
        <div className={`my-q-card ${question.responded?"yellow-q":""} ${question.answered?"green-q":""}`}> 
            <div className="card-content">
                <div className="my-q">
                    {question.question}
                </div>
                <div className={`date-ques ${(question.responded && !(question.answered))?"yellow-date":""}`}>
                    {question.user && dateFormat(question.timestamp, "dddd, mmmm dS, yyyy")}
                </div>
                </div>
            <div className="my-q-tags">
                <TagIcon icon = {question.answered ? <Tgreen/> : (question.responded ? <Tyellow/> : <Tmag/>)}>
                    <TagDropdown tags={question.tags} disabled={true}></TagDropdown>
                </TagIcon>
                
                {question.user && <div className="answer-question">
                    <button className={`view-ans ${question.responded?"yellow-q":"magenta-q"} ${question.answered?"green-q":"magenta-q"}`} onClick={viewAnswerClick}><i className="fas fa-eye"></i></button>
                </div>}
            </div>
        </div>
    )
}
