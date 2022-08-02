import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import PostQuery from "../queries/PostQuery";

const DeleteModal = (props) => {
  const [hidden, setHidden] = useState(false)

  let city = useParams().city
  let id = useParams().id;
  let navigate = useNavigate();

  return(
    <div className={hidden ? "hidden" : "modal"} >
      <p>Are you sure you want to delete this post?</p>
      <button onClick={() => props.handleClick(true)}>Cancel</button>
      <button className="delete-button-true" onClick={() => PostQuery.delete(id).then(data => {navigate(`/cities/${city}`)})}>Delete</button>
    </div>
  )

}

export default DeleteModal