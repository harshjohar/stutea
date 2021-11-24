import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BigQuestionCard } from "./BigQuestionCard";
import { Spinner } from "./Spinner";
import { QuestionCardMore } from './QuestionCardMore';
import { Link } from 'react-router-dom';
// import {ReactComponent as Prev} from "../Assets/Rest/Left.svg"
// import {ReactComponent as Next} from "../Assets/Rest/Right.svg"
// import {ReactComponent as PrevActive} from "../Assets/Click/Left.svg"
// import {ReactComponent as NextActive} from "../Assets/Click/Right.svg"

export const QuestionTag = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const [questions, setQuestions] = useState([]);
    // const [pageCount, setPageCount] = useState(0);
    // const [currPage, setCurrPage] = useState(1);

    const {search} = useLocation();
    const useQuery = () => {

        return React.useMemo(()=> new URLSearchParams(search), []);
    }

    const query = useQuery();
    const reqTag = query.get("tag");

    let history = useHistory();
    // Get the questions related to one tag only
    const getQuestionsTag = async () => {
        // api call
        const response = await fetch(`${host}/api/questions/tags/${reqTag}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            }
        });
        const json = await response.json();
        setQuestions(json.questions);
        // const pgs = json.count;
        // setPageCount(Math.ceil(pgs/15));
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getQuestionsTag();
    } else {
        history.push("/login");
    }
        
        return () => {
            setQuestions([]);
        }
        // eslint-disable-next-line
    }, [])
    // const nextClick = () => {
    //     setCurrPage(currPage+1);
    //     getQuestionsTag(currPage);
    // }

    // const prevClick = () => {
    //     setCurrPage(currPage-1);
    //     getQuestionsTag(currPage);
    // }
    return (
        <div className="questions">
            <div className="sub-heading-tags">
                Questions with tag <span className='tag-heading'>{reqTag}</span>
            </div>
            {!questions.length && <Spinner/>}
            <div className="big">
                {questions.length && <BigQuestionCard color='green' content={questions[0]}/>}
                {questions.length>1 && <BigQuestionCard color='magenta' content={questions[1]}/>}
            </div>
            <div className="sub-heading">
                    <div className="sub-heading-text">
                        <div className="heading-more">
                            More questions
                        </div>
                        <div className="all-tags">
                            <Link className="all-tags-link" to='/tags-all'>
                                View all tags &rarr;
                            </Link>
                        </div>
                    </div>
                    {/* <div className="buttons-next-prev">
                        {currPage===1 && <Prev className="prev-next-btn-disabled"/>}
                        {currPage!==1 && <PrevActive className="prev-next-btn" onClick={prevClick}/>}
                        {currPage===pageCount && <Next className="prev-next-btn-disabled"/>}
                        {currPage!==pageCount && <NextActive className="prev-next-btn" onClick={nextClick}/>}
                    </div> */}
                </div>
            {/* {questions.length>2 && <div>page number: {currPage}</div>} */}
            <div className="grp-of-three">
                {questions.length>2 && <QuestionCardMore content={questions[2]}/>}
                {questions.length>3 && <QuestionCardMore content={questions[3]}/>}
                {questions.length>4 && <QuestionCardMore content={questions[4]}/>}
            </div>
        </div>
    )
}
