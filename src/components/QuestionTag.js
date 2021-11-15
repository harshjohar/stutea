import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { QuestionCard } from "./QuestionCard";

export const QuestionTag = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const [questions, setQuestions] = useState([]);
    const [pageCount, setPageCount] = useState(0);

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
        const pgs = json.count;
        setPageCount(Math.ceil(pgs/15));
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
    return (
        <div>
            Questions with tag {reqTag}

            {pageCount?questions.map((question) => {
                return <QuestionCard key={question._id} question={question} />;
            }):"No Questions"}
        </div>
    )
}
