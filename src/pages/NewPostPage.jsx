import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import PostQuery from "../queries/PostQuery"

const NewPost = () => {
  const [state, setState] = useState({
    title: "",
    body: "",
    city: "",
    poster: "",
    comments: [],
  });

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    PostQuery.create(state)
    .then(data => {
      navigate("/san-francisco")
    });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return(
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            min="1"
            max="100"
            onChange={handleChange}
            value={state.title}
          />  
        </div>
        <div className="form-input">
          <label htmlFor="body">Post</label>
          <input
            type="textarea"
            name="body"
            min="1"
            max="1000"
            onChange={handleChange}
            value={state.body}
          />  
        </div>
        <input type="submit" value="Save"/>
      </form>
    </div>
  );
};

export default NewPost