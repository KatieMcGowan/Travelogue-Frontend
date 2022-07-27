import React, { useState, useEffect } from "react"
import PostQuery from "../queries/PostQuery"
import Posts from "./Posts"

const PostsContainer = () => {
  const [state, setState] = useState({
    posts: []
  })

  useEffect(() => {
    PostQuery.all().then(data => setState({
      posts: data
    }))
  }, [])

  return(
    <div className="posts-container">
      <div className="posts-header">
        <h3>Posts</h3>
        <button className="new-post-button">+</button>
      </div>
      <Posts 
        posts={state.posts}
      />  
    </div>  
  )
}

export default PostsContainer