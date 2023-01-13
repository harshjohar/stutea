import React, {useState} from 'react'
import '../css/ViewAns.css'

export const Feedback = (props) => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const ques = props.question;
    const ans = props.answer;
    const [res, setRes] = useState("");
    const [trans, setTrans] = useState({})
    const [activeStars, setactiveStars] = useState(0)
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
        setactiveStars(star)
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
        // transaction
        await transaction();

        
    }

    

    return (
        <>
        <div className="star-layout">

            <div className="review">
        <label className="upload-ques-label">Kindly give your feedback :</label>
        <div className="stars">
            <button className="feedback-option" onClick={()=>giveFeedback(1)}><i className={`${(activeStars>=1)?'fas star-border':'far'} fa-star`}></i></button>
            <button className="feedback-option" onClick={()=>giveFeedback(2)}><i className={`${(activeStars>=2)?'fas star-border':'far'} fa-star`}></i></button>
            <button className="feedback-option" onClick={()=>giveFeedback(3)}><i className={`${(activeStars>=3)?'fas star-border':'far'} fa-star`}></i></button>
            <button className="feedback-option" onClick={()=>giveFeedback(4)}><i className={`${(activeStars>=4)?'fas star-border':'far'} fa-star`}></i></button>
            <button className="feedback-option" onClick={()=>giveFeedback(5)}><i className={`${(activeStars>=5)?'fas star-border':'far'} fa-star`}></i></button>
            

            </div>
            </div>
            <div className="thanks">{res}</div>
            {trans.credits&&<div className="transaction-success">
                {(activeStars>0)? <div className="transaction-status">
                    Transaction Successful. You are left with <div className="credits-left">{" "+trans.credits+" "}</div> credits. </div>
                : ""}
            </div>}
        </div>
        </>
    )
}
