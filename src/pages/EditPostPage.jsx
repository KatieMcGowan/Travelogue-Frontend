import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import PostQuery from "../queries/PostQuery"
import CitiesContainer from "../components/CitiesContainer"

const EditPostPage = () => {
  const [state, setState] = useState({
    title: "",
    body: "",
    city: "",
    poster: "",
    comments: [],
  });

  let city = useParams().city
  let id = useParams().id
  let navigate = useNavigate()

  useEffect(() => {
    PostQuery.show(id).then(data => setState(data))
  }, [id]);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.title.length >= 1 && state.title.length <= 200 && state.body.length >= 1) {
      PostQuery.create(state)
      .then(data => {
        navigate(`/cities/${city}/${id}`)
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
    <div className="edit-post-content">
      <CitiesContainer />
      <div className="edit-post-container">
        <div>
          <h2>Edit Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="title">Title</label>
              <br/>
              <input
                type="text"
                name="title"
                placeholder={state.title}
                min="1"
                max="100"
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
                placeholder={state.body}
                min="1"
                max="1000"
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

export default EditPostPage