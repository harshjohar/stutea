import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MyQuestionCard } from "./MyQuestionCard";
import ReactPaginate from "react-paginate";

export const MyQuestions = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useHistory();
    const [pageCount, setPageCount] = useState(0);
    const [questions, setQuestions] = useState([]);

    // Get Own Questions
    const getMyQuestions = async (pg) => {
        // api call
        const response = await fetch(`${host}/api/questions/fetchuser`, {
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
        setQuestions(json.myQuestions);
        const pgs = json.count;
        setPageCount(Math.ceil(pgs / 15));
    };
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getMyQuestions(1);
        } else {
            history.push("/login");
        }
        // eslint-disable-next-line
    }, []);

    const handlePageClick = async (data) => {
        let currPage = data.selected + 1;
        const resServer = await getMyQuestions(currPage);
        setQuestions(resServer);
    };
    return (
        <div className="my-questions">
            <h2>My Questions</h2>
            {questions.map((question) => {
                return <MyQuestionCard key={question._id} question={question} />;
            })}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
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
            />
        </div>
    );
};
