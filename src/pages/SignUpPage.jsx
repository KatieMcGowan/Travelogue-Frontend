import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import UserQuery from "../queries/UserQuery"

const SignUpPage = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    name: "",
    location: "",
  });

  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
      UserQuery.create(state)
      .then(data => {
        props.authCheck(true)
        navigate(`/`)
      });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="new-user-content">
    <div className="new-user-container">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <br/>
            <input
              type="text"
              name="username"
              minLength="5"
              maxLength="20"
              required={true}
              onChange={handleChange}
              value={state.title}
            />
            <span></span>   
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <br/>
            <input
              type="text"
              name="password"
              minLength="8"
              maxLength="20"
              required={true}
              onChange={handleChange}
              value={state.body}
            /> 
            <span></span> 
          </div>
          <div className="form-input">
            <label htmlFor="displayname">Display Name</label>
            <br/>
            <input
              type="text"
              name="name"
              minLength="1"
              maxLength="20"
              required={true}
              onChange={handleChange}
              value={state.body}
            /> 
            <span></span> 
          </div>
          <input type="submit" value="Save"/>
        </form>
      </div>
    </div>  
  </div>
  )
};

export default SignUpPage