import CitiesContainer from "../components/CitiesContainer";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostQuery from "../queries/PostQuery";

const PostPage = () => {
  const [post, setPost] = useState({})

  let id = useParams().id;
 
  // let navigate = useNavigate();

  useEffect(() => {
    PostQuery.show(id).then(data => setPost(data))
  }, [id]);

  return (
    <div className="post-content">
    <CitiesContainer />
    <div className="post-container">
      <h1>{post.title}</h1>
      <h3>by {post.poster}</h3>
      <p>{post.body}</p>
    </div>
    </div>  
  )
};

export default PostPage