import React, { useState, useContext, useEffect } from 'react'
import Axios from "axios";
import userContext from '../Context/User/userContext'
import { useNavigate } from 'react-router-dom'
import "../css/Settings.css"

export const Settings = () => {
    const uContext = useContext(userContext);
    const {user, getUserByAuthToken} = uContext;
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useNavigate();
    useEffect(() => {
        getUserByAuthToken();
        return () => {
            
        }
        // eslint-disable-next-line
    }, [])
    const [dp, setDp] = useState(user.dp);
    const [imageFile, setimageFile] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [userData, setUserData] = useState({
        first: user.first,
        last: user.last,
        city: user.city
    })
    const onChange = (e) => {
        // console.log("change");
        setUserData({...userData, [e.target.name]: e.target.value})
    }
    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageFile[0]);
        formData.append("upload_preset", "project-stutea");
        Axios.post(
            "https://api.cloudinary.com/v1_1/stutea/image/upload",
            formData
        ).then((res) => {
            // console.log(res);
            setDp(res.data.url);
            setUploaded(true);
        });
    };
    const handleSubmit = async() => {
        const response = await fetch(`${host}/api/user/settings`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                first: userData.first,
                last: userData.last,
                city: userData.city,
                dp: dp
            })
        })
        response.json();
        history('/profile')
    }
    return (
        <div className="settings-main">
            <h2 className="register-form-head">Settings</h2>
            <form className="rform">
            <div className="rform-div">
                <label htmlFor="first" className="rform-label">First Name</label>
                <input type="text" placeholder="Enter your username" className="rform-input"name="first" id="first" onChange={onChange} value={userData.first}/>
            </div>
            <div className="rform-div">
                <label htmlFor="last" className="rform-label">Last Name</label>
                <input type="text" placeholder="Enter your username" className="rform-input"name="last" id="last" onChange={onChange} value={userData.last}/>
            </div>
            <div className="rform-div">
                <label htmlFor="city" className="rform-label">City</label>
                <input type="text" placeholder="Enter your username" className="rform-input"name="city" id="city" onChange={onChange} value={userData.city}/>
            </div>
            </form>

            <div className="rform-div mcol">
                <label htmlFor="city" className="rform-label choose-dp">Choose your profile picture</label>
                <div className="dp-selection">
                <div className={`dp-item ${dp==="https://res.cloudinary.com/stutea/image/upload/v1637785561/pp2_mgz6at.jpg" ? "dp-selected":""}`}>
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785561/pp2_mgz6at.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785561/pp2_mgz6at.jpg")}/>
                </div>
                <div className={`dp-item ${dp==="https://res.cloudinary.com/stutea/image/upload/v1637785560/pp1_ybanrh.jpg" ? "dp-selected":""}`}>
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785560/pp1_ybanrh.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785560/pp1_ybanrh.jpg")}/>
                </div>
                <div className={`dp-item ${dp==="https://res.cloudinary.com/stutea/image/upload/v1637785559/pp3_kr4oxm.png" ? "dp-selected":""}`}>
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785559/pp3_kr4oxm.png" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785559/pp3_kr4oxm.png")}/>
                </div>
                <div className={`dp-item ${dp==="https://res.cloudinary.com/stutea/image/upload/v1637785363/daniel-bernard-b56KbmGkfWg-unsplash_uofcgp.jpg" ? "dp-selected":""}`}>
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785363/daniel-bernard-b56KbmGkfWg-unsplash_uofcgp.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785363/daniel-bernard-b56KbmGkfWg-unsplash_uofcgp.jpg")}/>
                </div>
                
                <div className={`dp-item ${dp==="https://res.cloudinary.com/stutea/image/upload/v1637703190/60111_ak19ro.jpg" ? "dp-selected":""}`}>
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637703190/60111_ak19ro.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637703190/60111_ak19ro.jpg")}/>
                </div>
                <div className={`dp-item ${dp==="https://res.cloudinary.com/stutea/image/upload/v1637703179/create-minimalist-vector-art-for-dp-or-social-media-use_hml37n.jpg" ? "dp-selected":""}`}>
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637703179/create-minimalist-vector-art-for-dp-or-social-media-use_hml37n.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637703179/create-minimalist-vector-art-for-dp-or-social-media-use_hml37n.jpg")}/>
                </div>
                <div className={`dp-item ${dp==="https://res.cloudinary.com/stutea/image/upload/v1636875706/sample_nw8mlw.png" ? "dp-selected":""}`}>
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1636875706/sample_nw8mlw.png" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1636875706/sample_nw8mlw.png")}/>
                </div>
                </div>
                <div className="img-upload-area">
                    Or upload your own..
                    <div className="ques-inputs">
                        <input
                            type="file"
                            id="imgString"
                            className="tagString"
                            placeholder="hehe"
                            onChange={(e) => {
                                setimageFile(e.target.files);
                            }}
                        />
                    </div>
                    <div className="btn-upload">
                        <button
                            type="button"
                            className="btn-upload-img"
                            onClick={uploadImage}
                        >
                            Upload Image
                        </button>
                        {uploaded ? "Image Uploaded" : ""}
                    </div>
                </div>
            </div>
            <div className="form-button">

            <button onClick={handleSubmit} className="form-submit-btn">
                Submit
            </button>
            </div>
        </div>
    )
}
