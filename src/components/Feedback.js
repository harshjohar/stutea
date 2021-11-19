import React, {useState} from 'react'

export const Feedback = (props) => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const ques = props.question;
    const [res, setRes] = useState("");
    const giveFeedback = async (star) => {
        const response = await fetch(`${host}/api/feedback/rating`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                stars: star,
                question: ques._id
            })
        })

        const res = await response.json(); 
        setRes(res.msg);
    }

    return (
        <div>
            <button className="feedback-option" onClick={()=>giveFeedback(1)}>1 star</button>
            <button className="feedback-option" onClick={()=>giveFeedback(2)}>2 star</button>
            <button className="feedback-option" onClick={()=>giveFeedback(3)}>3 star</button>
            <button className="feedback-option" onClick={()=>giveFeedback(4)}>4 star</button>
            <button className="feedback-option" onClick={()=>giveFeedback(5)}>5 star</button>
            {res}
        </div>
    )
}
