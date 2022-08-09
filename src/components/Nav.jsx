import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [state, setState] = useState({
    left: "Log In", 
    right: "Sign Up"
  });

  //when logged in: useState({left: "View Profile", right: "Log-out"})
  useEffect(() => {
    if (props.loggedIn === true) {
    setState({
      left: "Home",
      right: "Log Out"
    });
  }}, [])

//   <Link to={`/cities/${props.post.city}/${props.post._id}`}>
//   <h4>{props.post.title}</h4>
// </Link>  

{/* <button onClick={() => {handleClick(false)}}>Delete Post</button>
<div id="modal" className={hidden ? 'hidden' : "modal"}>
  <DeleteModal
    id={id}
    display={hidden}
    handleClick={handleClick}
  />
</div> */}

// const handleClick = (boolean) => {
//   if (boolean === false) {
//     setHidden(false);
//   } else {
//     setHidden(true);
//   }
// };


  return(
    <div className="nav-wrapper">
      <div className="nav-left">
        <h1><Link to={"/login"}>{state.left}</Link></h1>
      </div>
      <div className="nav-space">|</div>
      <div className="nav-right">
        <h1><Link to={"/signup"}>{state.right}</Link></h1>
      </div>
    </div>
  ) 
}

export default Nav