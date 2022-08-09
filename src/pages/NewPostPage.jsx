import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import PostQuery from "../queries/PostQuery"
import CitiesContainer from "../components/CitiesContainer";

const NewPostPage = (props) => {
  let city = useParams().city
  let navigate = useNavigate();

  const [state, setState] = useState({
    title: "",
    body: "",
    city: city,
    poster: "Guest",
    comments: [],
  });

  //Authentication check
  const checkedLoggedIn = () => {
    if (props.loggedIn !== true) {
      navigate("/login") 
    } else return;
  }

  useEffect(() => {
    checkedLoggedIn();
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.title.length >= 1 && state.title.length <= 200 && state.body.length >= 1) {
      PostQuery.create(state)
      .then(data => {
        navigate(`/cities/${city}`)
      });
    } else if (state.title.length < 1) {
      console.log("Post title is too short")
    } else if (state.title.length >= 200) {
      console.log("Post title is too long") 
    } else if (state.body.length < 1) {
      console.log("Post body is too short")
    }
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
              <br/>
              <input
                type="text"
                name="title"
                minLength="1"
                maxLength="100"
                required={true}
                onChange={handleChange}
                value={state.title}
              />
              <span></span>   
            </div>
            <div className="form-input">
              <label htmlFor="body">Post</label>
              <br/>
              <input
                type="textarea"
                name="body"
                minLength="1"
                maxLength="1000"
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
  );
};

export default NewPostPage