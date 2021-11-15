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
      <h2>Come Join StuTea</h2>
      <form onSubmit={handleSubmit}>
                <div className="form">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={onChange} value={credentials.username}/>
                </div>
                <div className="form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={onChange} value={credentials.email}/>
                </div>
                <div className="form">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={onChange} value={credentials.password}/>
                </div>
                <div className="form">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname" onChange={onChange} value={credentials.firstname}/>
                </div>
                <div className="form">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" onChange={onChange} value={credentials.lastname}/>
                </div>
                <div className="form">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" onChange={onChange} value={credentials.city}/>
                </div>
                <div className="form-button">
                <button type="submit" className="submit-button">
                    Submit
                </button>
                </div>
            </form>
    </div>
  );
};

export default Register;