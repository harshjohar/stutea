import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BigQuestionCard } from "./BigQuestionCard";
import { Spinner } from "./Spinner";
import { QuestionCardMore } from './QuestionCardMore';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
// import {ReactComponent as Prev} from "../Assets/Rest/Left.svg"
// import {ReactComponent as Next} from "../Assets/Rest/Right.svg"
import {ReactComponent as PrevActive} from "../Assets/Click/Left.svg"
import {ReactComponent as NextActive} from "../Assets/Click/Right.svg"
import "../css/FavTagQues.css"
import {ReactComponent as NotifIconActive} from "../Assets/Click/Notification.svg"
import {ReactComponent as CreditIcon} from "../Assets/Click/Credits.svg"
import {ReactComponent as ProfileIcon} from "../Assets/Click/Profile.svg"
import { NavItem } from './Notifications/NavItem';
import { Dropdown } from './Notifications/Dropdown';

export const FavTagQues = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const [questions, setQuestions] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    
    let history = useNavigate();
    // Get the questions
    const getQuestions = async (pg) => {
        // api call
        const response = await fetch(`${host}/api/questions/favs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                page: pg,
            }),
        });
        const json = await response.json();
        setQuestions(json.questions);
        const pgs = json.count;
        setPageCount(Math.ceil(pgs/5));
    };


    useEffect(() => {
        if (localStorage.getItem("token")) {
                getQuestions(1);
        } else {
            history("/login");
        }
        // eslint-disable-next-line
    }, []);

    const handlePageClick = async (data) => {
        let currPage = data.selected + 1;
        await getQuestions(currPage);
    };

    return (
        <div className="fav-main" style={{"marginLeft": "20vw"}}>
            <div className="top-icons">
                    {/* <NotifIconActive className='icon-top'/> */}
                    <NavItem icon={<NotifIconActive/>}>
                        <Dropdown type="notif"></Dropdown>
                    </NavItem>
                    <NavItem icon={<CreditIcon/>}>
                        <Dropdown type="credits"></Dropdown>
                    </NavItem>
                    <Link to="/profile">
                    <ProfileIcon className="icon-top"/>
                    </Link>
            </div>
            <h2 className="fav-head">Questions based on favorite tags</h2>
        <div className="questions">
            {!questions.length && <Spinner/>}
            <div className="big">
                {questions.length && <BigQuestionCard color='green' content={questions[0]}/>}
                {questions.length>1 && <BigQuestionCard color='magenta' content={questions[1]}/>}
            </div>
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
            <div className="grp-of-three">
                    {questions.length>2 && <QuestionCardMore content={questions[2]}/>}
                    {questions.length>3 && <QuestionCardMore content={questions[3]}/>}
                    {questions.length>4 && <QuestionCardMore content={questions[4]}/>}
            </div>
            {questions && <ReactPaginate
                previousLabel={<PrevActive className='prev-next-btn'/>}
                nextLabel={<NextActive className='prev-next-btn'/>}
                onPageChange={handlePageClick}
                breakLabel={"...."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                containerClassName={"pagination justify-content-center align-items-center"}
                pageClassName={"page-item-no justify-content-center align-items-center"}
                pageLinkClassName={"page-link-no"}
                previousClassName={"page-item-own"}
                previousLinkClassName={"page-link-own"}
                nextClassName={"page-item-own"}
                nextLinkClassName={"page-link-own"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active-own"}
            />}

        </div>
        </div>
    );
}
