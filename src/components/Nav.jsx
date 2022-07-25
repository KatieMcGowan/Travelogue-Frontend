import React, { useState } from "react"

const Nav = () => {
  const [state, setState] = useState({
    left: "Log In",
    right: "Sign Up"
  });

  //when logged in: useState({left: "View Profile", right: "Log-out"})
  
  return(
    <div className="nav-wrapper">
      <div className="nav-left">
        <h1>{state.left}</h1>
      </div>
      <div className="nav-space">|</div>
      <div className="nav-right">
        <h1>{state.right}</h1>
      </div>
    </div>
  ) 
}

export default Nav