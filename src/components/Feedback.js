import React, {useState} from 'react'

export const Feedback = (props) => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const ques = props.question;
    const ans = props.answer;
    const [res, setRes] = useState("");
    const [trans, setTrans] = useState({})
    const transaction = async ()=> {
        const response = await fetch(`${host}/api/credits/transaction`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                question: ques._id,
                answer: ans._id
            })
        })

        const res = await response.json();
        setTrans(res);
    }
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
        setTrans(res.msg);
        // transaction
    }

    return (
        <div>
            <button className="feedback-option" onClick={()=>giveFeedback(1)}>1 star</button>
            <button className="feedback-option" onClick={()=>giveFeedback(2)}>2 star</button>
            <button className="feedback-option" onClick={()=>giveFeedback(3)}>3 star</button>
            <button className="feedback-option" onClick={()=>giveFeedback(4)}>4 star</button>
            <button className="feedback-option" onClick={()=>giveFeedback(5)}>5 star</button>
            {res}
            <div className="treansiction-success">
                {trans?trans.credits: "lulz"}
            </div>
        </div>
    )
}
