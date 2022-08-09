import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserQuery from "../queries/UserQuery";

const LogInPage = (props) => {
  const [state, setState] = useState ({
    username: "",
    password: ""
  });

  const [users, setUsers] = useState({})

  useEffect(() => {
    UserQuery.all()
    .then(data => {
      setUsers({
        users: data
      }) 
    });
  }, [])

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < users.users.length; i++) {
      if (users.users[i].username === state.username && users.users[i].password === state.password) {
        console.log("Log in succeeded")
        props.authCheck(true);
        navigate("/")
      // } else {
      //   console.log("Log in failed")
      //   return
      // }
    }}
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="login-content">
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <br/>
            <input
              type="text"
              name="username"
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
              required={true}
              onChange={handleChange}
              value={state.body}
            /> 
            <span></span> 
          </div>
          <input type="submit" value="Save"/>
        </form>  
    </div>
  )
}

export default LogInPage