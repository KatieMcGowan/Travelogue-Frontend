const Comment = (props) => {

  // console.log(props.comment.body)
  
  return (
    <div className="individual-post-container">
      <h6>{props.comment.commenter}</h6>
      <h5>{props.comment.body}</h5>
    </div>
  )
}

export default Comment