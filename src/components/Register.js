import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import "../css/Register.css"

export const Register = () => {
    const host = process.env.REACT_APP_BACKEND_URL;
  let history = useHistory();
  const [credentials, setCredentials] = useState({
      username : "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      city: ""
  })

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: credentials.username,
            email: credentials.email,
            password: credentials.password,
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            city: credentials.city
        })
    });

    const json = await response.json();
    if(json.success) {
        history.push(`/wait/${credentials.email}`);
    }
    else {
        alert("Invalid Credentials");
    }
}

const onChange = (e)=> {
  setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div className="register-form">
        <div className="rform-head">
      <h2 className="register-form-head">Come Join StuTea</h2>
      <form onSubmit={handleSubmit} className="rform">
                <div className="rform-div">
                    <label htmlFor="username" className="rform-label">Username</label>
                    <input type="text" placeholder="Enter your username" className="rform-input" name="username" id="username" onChange={onChange} value={credentials.username}/>
                </div>
                <div className="rform-div">
                    <label htmlFor="email" className="rform-label">Email</label>
                    <input type="email" placeholder="Enter your email id" className="rform-input" name="email" id="email" onChange={onChange} value={credentials.email}/>
                </div>
                <div className="rform-div">
                    <label htmlFor="password" className="rform-label">Password</label>
                    <input type="password" placeholder="Enter your password" className="rform-input" name="password" id="password" onChange={onChange} value={credentials.password}/>
                </div>
                <div className="rform-div">
                    <label htmlFor="firstname" className="rform-label">First Name</label>
                    <input type="text" placeholder="Enter your first name" className="rform-input" name="firstname" id="firstname" onChange={onChange} value={credentials.firstname}/>
                </div>
                <div className="rform-div">
                    <label htmlFor="lastname" className="rform-label">Last Name</label>
                    <input type="text" placeholder="Enter your last name" className="rform-input" name="lastname" id="lastname" onChange={onChange} value={credentials.lastname}/>
                </div>
                <div className="rform-div">
                    <label htmlFor="city" className="rform-label">City</label>
                    <input type="text" placeholder="Enter your city" className="rform-input" name="city" id="city" onChange={onChange} value={credentials.city}/>
                </div>
                <div className="form-button">
                <button type="submit" className="form-submit-btn">
                    Submit
                </button>
                </div>
            </form>
            </div>
    </div>
  );
};

export default Register;