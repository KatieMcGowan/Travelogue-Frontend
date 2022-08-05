import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CommentQuery from "../queries/CommentQuery"
import Comment from "./Comment"

const Comments = (props) => {
  const [state, setState] = useState({
    comments: []
  })

  let id = useParams().id
  let newestComments = []
  
  useEffect(() => {
    let sortedComments = [];
    CommentQuery.all().then(data => {  
      for (let i = 0; i < data.length; i++) {
        if (data[i].post === id) {
          sortedComments.push(data[i])
        };
      };
      setState({
        comments: sortedComments
      });
    });
  }, [])
  
  for (let i = state.comments.length - 1; i >= 0; i--) {
    newestComments.push(state.comments[i])
  }

  console.log(newestComments)
  
  return (
    <div>
      {newestComments.map(comment => {
        return <Comment
                  key={comment._id} 
                  comment={comment}
                />  
      })}
    </div>
  )
}



export default Comments