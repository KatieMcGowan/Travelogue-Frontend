import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CitiesContainer from "../components/CitiesContainer";
import PostQuery from "../queries/PostQuery";
import DeleteModal from "../components/DeleteModal"
import Comments from "../components/Comments";
import NewComment from "../components/NewComment";

const PostPage = (props) => {
  const [post, setPost] = useState({})
  const [hidden, setHidden] = useState(true);

  let city = useParams().city
  let id = useParams().id;
  let navigate = useNavigate();

  useEffect(() => {
    if (props.loggedIn !== true) {
      navigate("/login") 
    } else {
    PostQuery.show(id).then(data => setPost(data))
  }}, []);
  
  //Delete Modal Function:
  const handleClick = (boolean) => {
    if (boolean === false) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  //Date Conversion:
  let illegibleDate = post.createdAt
  let legibleDate = new Date(illegibleDate)
  let postDate = legibleDate.toDateString()

  //City Name Converstion:
  const capitalizeCity = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const handleHyphens = (string) => {
    let unHyphenated = string.replace("-", " ");
    let split = unHyphenated.split(" ")
    let upperCase = split.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    return upperCase.join(" ");
  };

  const cityConvert = (string) => {
    if (string.includes("-")) {
      return handleHyphens(string)
    } else {
      return capitalizeCity(string)
    }
  }

  return (
    <div className="post-content">
      <CitiesContainer />
      <div className="post-container">
        <h1>{post.title}</h1>
        <h3>by {post.poster}</h3>
        <h4>{postDate}</h4>
        <p>{post.body}</p>
        <Link to={`/cities/${city}/${id}/edit`}>Edit Post</Link>
        <button onClick={() => {handleClick(false)}}>Delete Post</button>
        <div id="modal" className={hidden ? 'hidden' : "modal"}>
          <DeleteModal
            id={id}
            display={hidden}
            handleClick={handleClick}
          />
        </div>
        <div className="comments-content">
          <h3>Comments</h3>
          <NewComment postbody={post.body}/>  
          <Comments comments={post.comments}/> 
        </div>
        <Link to={`/cities/${city}`}>Back to {cityConvert(city)}</Link>
      </div>
    </div>  
  )
};

export default PostPage