import React, { useContext, useState } from 'react'
import questionContext from '../Context/Questions/questionContext'

export const AddQuestion = () => {
    const context = useContext(questionContext);
    const {addQuestion} = context;
    const init = {
        question: "",
        tags: ["sample", "testing"]
    }
    const [question, setQuestion] = useState(init);
    // TODO
    // tags
    const handleClick = (e) => {
        e.preventDefault();
        addQuestion(question.question, question.tags);
        setQuestion(init);
    }
    const onChange = (e)=> {
        setQuestion({...question, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <form>
                <input type="text" name="question" id="question" className="question" onChange={onChange} />
            </form>
            <button type="submit" className="addQues" onClick={handleClick}>Upload</button>
        </div>
    )
}
