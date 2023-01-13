import questionContext from "./questionContext";
import { useState } from "react";

const QuestionState = (props) => {
    // api calls
    const host = process.env.REACT_APP_BACKEND_URL;
    const initial=[];
    const [questions, setQuestions] = useState(initial);

    // Get the questions
    const getQuestions = async (pg) => {
        // api call
        const response = await fetch(`${host}/api/questions/fetch`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "page": pg
            })
        });
        const json = await response.json();
        setQuestions(json);
    };

    // Add Question
    // Get Own Questions
    const getMyQuestions = async (pg) => {
        // api call
        const response = await fetch(`${host}/api/questions/fetchuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "page": pg
            })
        });
        const json = await response.json();
        setQuestions(json);
    };
    return(
        <questionContext.Provider value={{questions, getQuestions, getMyQuestions}}>
            {props.children}
        </questionContext.Provider>
    )
};

export default QuestionState;