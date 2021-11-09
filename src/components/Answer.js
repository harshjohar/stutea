import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

export const Answer = () => {
    const {quesid}=useParams();
    const host = process.env.REACT_APP_BACKEND_URL;
    const init = {
        answer: ""
    }
    const [answer, setAnswer] = useState(init);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // api call
        const response = await fetch(`${host}/api/answers/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                "question": quesid,
                "answer": answer.answer
            })
        });
        response.json();
        setAnswer(init);
    }

    const onChange = (e) => {
        setAnswer({...answer, [e.target.name]: e.target.value});
    }

    return (
        <div>
            {quesid}
            <form>
                <label htmlFor="answer">Write your answer here</label>
                <input type="text" name="answer" id="answer" className="answer" value={answer.answer} onChange={onChange} />
            </form>
            <button type="submit"className="addAnswer" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
