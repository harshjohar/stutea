import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom';
import "../css/Dashboard.css"

export const AddQuestion = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
    const init = {
        question: ""
    }
    let history=useHistory();
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
        history.push("/");
    }
    const onChange = (e)=> {
        setQuestion({...question, [e.target.name]: e.target.value});
    }
    const onChangeTags = (e)=> {
        setTagString(e.target.value);
    }
    return (
        <div className="upload-ques">
                <h2 className="upload-ques-heading">Upload your question</h2>
                <form className="upload-ques-form">
                    <div className="ques-area">
                        <label htmlFor="question" className="upload-ques-label">Question</label>
                        <div className="ques-inputs">
                            <textarea rows="4" name="question" id="question" className="question"value={question.question} onChange={onChange} />
                        </div>
                    </div>
                    <div className="tags-area">
                        <label htmlFor="tagString" className="upload-ques-tags">Tags</label>
                        <div className="ques-inputs">
                            <input type="text" name="tagString" id="tagString" className="tagString" value={tagString} onChange={onChangeTags} />
                        </div>
                    </div>
                    <button type="submit" className="add-ques-btn" onClick={handleClick}>Upload</button>
                </form>
        </div>
    )
}
