import React, { useState, useContext, useEffect } from 'react'
import userContext from '../Context/User/userContext'
import { useHistory } from 'react-router-dom'
import "../css/Settings.css"

export const Settings = () => {
    const uContext = useContext(userContext);
    const {user, getUserByAuthToken} = uContext;
    const host = process.env.REACT_APP_BACKEND_URL;
    let history = useHistory();
    useEffect(() => {
        getUserByAuthToken();
        return () => {
            
        }
        // eslint-disable-next-line
    }, [])
    const [dp, setDp] = useState(user.dp);
    const [userData, setUserData] = useState({
        first: user.first,
        last: user.last,
        city: user.city
    })
    const onChange = (e) => {
        console.log("change");
        setUserData({...userData, [e.target.name]: e.target.value})
    }
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
        history.push('/profile')
    }
    return (
        <div className="settings-main">
            <h1>settings</h1>
            <form>
            <div>
                <label htmlFor="first">First Name</label>
                <input type="text" placeholder="Enter your username" name="first" id="first" onChange={onChange} value={userData.first}/>
            </div>
            <div>
                <label htmlFor="last">Last Name</label>
                <input type="text" placeholder="Enter your username" name="last" id="last" onChange={onChange} value={userData.last}/>
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" placeholder="Enter your username" name="city" id="city" onChange={onChange} value={userData.city}/>
            </div>
            </form>

            <div className="dp-selection">
                <div className="dp-item">
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785561/pp2_mgz6at.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785561/pp2_mgz6at.jpg")}/>
                </div>
                <div className="dp-item">
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785560/pp1_ybanrh.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785560/pp1_ybanrh.jpg")}/>
                </div>
                <div className="dp-item">
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785559/pp3_kr4oxm.png" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785559/pp3_kr4oxm.png")}/>
                </div>
                <div className="dp-item">
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785363/daniel-bernard-b56KbmGkfWg-unsplash_uofcgp.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785363/daniel-bernard-b56KbmGkfWg-unsplash_uofcgp.jpg")}/>
                </div>
                <div className="dp-item">
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637785354/cdd20-c6QH1SXGS8M-unsplash_txu97p.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637785354/cdd20-c6QH1SXGS8M-unsplash_txu97p.jpg")}/>
                </div>
                <div className="dp-item">
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637703190/60111_ak19ro.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637703190/60111_ak19ro.jpg")}/>
                </div>
                <div className="dp-item">
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1637703179/create-minimalist-vector-art-for-dp-or-social-media-use_hml37n.jpg" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1637703179/create-minimalist-vector-art-for-dp-or-social-media-use_hml37n.jpg")}/>
                </div>
                <div className="dp-item">
                    <img src="https://res.cloudinary.com/stutea/image/upload/v1636875706/sample_nw8mlw.png" alt="" onClick={()=>setDp("https://res.cloudinary.com/stutea/image/upload/v1636875706/sample_nw8mlw.png")}/>
                </div>
            </div>

            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}
