import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CitiesContainer from "../components/CitiesContainer";
import PostQuery from "../queries/PostQuery";

const PostPage = () => {
  const [post, setPost] = useState({})

  let id = useParams().id;
  let navigate = useNavigate();

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
      <Link to={`/cities/san-francisco/${id}/edit`}>Edit Post</Link>
      <button onClick={() => PostQuery.delete(id).then(data => {navigate("/cities/san-francisco")})}>
        Delete Post
      </button>
    </div>
    </div>  
  )
};

export default PostPage