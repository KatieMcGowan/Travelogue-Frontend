import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import PostQuery from "../queries/PostQuery"
import CitiesContainer from "../components/CitiesContainer";

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
    <div className="new-post-content">
      <CitiesContainer />
      <div className="new-post-container">
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
      </div>  
    </div>
  );
};

export default NewPost