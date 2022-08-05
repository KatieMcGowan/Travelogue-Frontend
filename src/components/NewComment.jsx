import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import CommentQuery from "../queries/CommentQuery"

const NewCommentPage = () => {
  let postid = useParams().id

  const [state, setState] = useState ({
    body: "",
    commenter: "Guest",
    post: postid
  });

  let city = useParams().city
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    CommentQuery.create(state)
    .then(data => {
      navigate(`/cities/${city}/${postid}`)
    });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="new-comment-content">
      <div className="new-comment-container">
        <form onSubmit={handleSubmit}>
          <span className="comment-input">
            <input
              type="text"
              name="body"
              minLength="1"
              maxLength="500"
              placeholder="Write a comment here"
              required={true}
              onChange={handleChange}
              value={state.body}
            />  
          </span>
          <input type="submit" value="Save"/>
        </form>
      </div>
    </div>
  )
};

export default NewCommentPage