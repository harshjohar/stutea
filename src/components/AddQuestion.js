import React, {  useState } from 'react'
// import "../css/Dashboard.css"

export const AddQuestion = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const init = {
        question: ""
    }
    const [question, setQuestion] = useState(init);
    const [tagString, setTagString] = useState("");
    const addQuestion = async () => {
        // api call
        let arr =  tagString.split(',');
        const response = await fetch(`${host}/api/questions/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                "question": question.question, 
                "tags": arr
            })
        });
        response.json();
        setQuestion(init);
        setTagString("");
    }
    const handleClick = (e) => {
        e.preventDefault();
        addQuestion();
        setQuestion(init);
    }
    const onChange = (e)=> {
        setQuestion({...question, [e.target.name]: e.target.value});
    }
    const onChangeTags = (e)=> {
        setTagString(e.target.value);
    }
    return (
        <div>
            <form>
                <label htmlFor="question">Question</label>
                <input type="text" name="question" id="question" className="question"value={question.question} onChange={onChange} />
                <label htmlFor="tagString">Tags</label>
                <input type="text" name="tagString" id="tagString" className="tagString" value={tagString} onChange={onChangeTags} />
            </form>
            <button type="submit" className="addQues" onClick={handleClick}>Upload</button>
        </div>
    )
}
