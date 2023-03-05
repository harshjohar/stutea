import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyAnsCard } from "./MyAnsCard";
import ReactPaginate from "react-paginate";
import {ReactComponent as PrevActive} from "../Assets/Click/Left.svg"
import {ReactComponent as NextActive} from "../Assets/Click/Right.svg"

export const MyAnswers = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useNavigate();
    const [answers, setAnswers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const getMyAnswers = async(pg) =>{
        const response = await fetch(`${host}/api/answers/user`,{
            method: "POST" ,
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                page: pg,
            }),
        });
        const json = await response.json();
        // console.log(json)
        setAnswers(json.answers);
        const pgs = json.count;
        setPageCount(Math.ceil(pgs / 6));
        
    }
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getMyAnswers(1)
        }
        else {
            history('/login');
        }
        return () => {
            setAnswers([])
        }
        // eslint-disable-next-line
    }, [])
    const handlePageClick = async (data) => {
        let currPage = data.selected + 1;
        await getMyAnswers(currPage);
    };
    return (
        <div className="my-questions dark-text">
            <h2 className="my-q-head dark-text">My Answers</h2>
            <div className="own-ques">
            {answers.map((answer) => {
                return <MyAnsCard key={answer._id} answer={answer} />;
            })}
            </div>
            {answers && <ReactPaginate
                previousLabel={<PrevActive className='prev-next-btn'/>}
                nextLabel={<NextActive className='prev-next-btn'/>}
                onPageChange={handlePageClick}
                breakLabel={"...."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
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
    )
}
