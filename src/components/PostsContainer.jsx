import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
        <div className="new-post-button">
          <Link to ={`/cities/san-francisco/new`}>+</Link>
        </div>  
      </div>
      <Posts 
        posts={state.posts}
      />  
    </div>  
  )
}

export default PostsContainer