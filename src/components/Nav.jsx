import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [state, setState] = useState({
    left: "Log In", 
    right: "Sign Up"
  });

  const [links, setLinks] = useState({
    left: "/login",
    right: "/signup"
  })

  useEffect(() => {
    if (props.loggedIn === true) {
    setState({
      left: "Home",
      right: "Log Out"
    });
    setLinks({
      left: "/",
      right: "/"
    })
  }}, [props.loggedIn])


  return(
    <div className="nav-wrapper">
      <div className="nav-left">
        <h1><Link to={links.left}>{state.left}</Link></h1>
      </div>
      <div className="nav-space">|</div>
      <div className="nav-right">
        <h1><Link to={links.right} onClick={() => props.authCheck(false)}>{state.right}</Link></h1>
      </div>
    </div>
  ) 
}

export default Nav