import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuestionCard } from "./QuestionCard";
import ReactPaginate from "react-paginate";

export const Questions = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const [questions, setQuestions] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    let history = useHistory();
    // Get the questions
    const getQuestions = async (pg) => {
        // api call
        const response = await fetch(`${host}/api/questions/fetch`, {
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
        setPageCount(Math.ceil(pgs/15));
    };


    useEffect(() => {
        if (localStorage.getItem("token")) {
                getQuestions(1);
        } else {
            history.push("/login");
        }
        // eslint-disable-next-line
    }, []);

    const handlePageClick = async (data) => {
        let currPage = data.selected + 1;
        await getQuestions(currPage);
    };
    return (
        <div className="questions">
            <h2>Questions</h2>
            {pageCount?questions.map((question) => {
                return <QuestionCard key={question._id} question={question} />;
            }):"No Questions"}
            {questions && <ReactPaginate
                previousLabel="prev"
                nextLabel="next"
                onPageChange={handlePageClick}
                breakLabel={"...."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />}
        </div>
    );
};
