import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import PostQuery from "../queries/PostQuery"
import Posts from "./Posts"

const PostsContainer = () => {
  const [state, setState] = useState({
    posts: []
  })

  let city = useParams().city

  useEffect(() => {
    PostQuery.all().then(data => setState({
      posts: data
    }))
  }, [])

  // useEffect(() => {
  //   PostQuery.all().then(data => {       
  //     for (let i = 0; i < data.length; i++) {
  //       // console.log(data[i].city)
  //       if (data[i].city === city) {
  //         setState({
  //           posts: data[i]
  //         });
  //       };
  //     };
  //   });
  // }, [])

  // console.log(state)

  return(
    <div className="posts-container">
      <div className="posts-header">
        <h3>Posts</h3>
        <div className="new-post-button">
          <Link to ={`/cities/${city}/new`}>+</Link>
        </div>  
      </div>
      <Posts 
        posts={state.posts}
      />  
    </div>  
  )
}

export default PostsContainer