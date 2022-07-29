import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CitiesContainer from "../components/CitiesContainer";
import PostQuery from "../queries/PostQuery";
import DeleteModal from "../components/DeleteModal"

const PostPage = () => {
  const [post, setPost] = useState({})
  const [hidden, setHidden] = useState(true);

  let id = useParams().id;

  useEffect(() => {
    PostQuery.show(id).then(data => setPost(data))
  }, [id]);

  const handleClick = (boolean) => {
    if (boolean === false) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  //Date functions
  let illegibleDate = post.createdAt
  let legibleDate = new Date(illegibleDate)
  let postDate = legibleDate.toDateString()

  return (
    <div className="post-content">
      <CitiesContainer />
      <div className="post-container">
        <h1>{post.title}</h1>
        <h3>by {post.poster}</h3>
        <h4>{postDate}</h4>
        <p>{post.body}</p>
        <Link to={`/cities/san-francisco/${id}/edit`}>Edit Post</Link>
        <button onClick={() => {handleClick(false)}}>
          Delete Post
        </button>
        <div id="modal" className={hidden ? 'hidden' : "modal"}>
          <DeleteModal
            id={id}
            display={hidden}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>  
  )
};

export default PostPage

        // PostQuery.delete(id).then(data => {navigate("/cities/san-francisco")})}>