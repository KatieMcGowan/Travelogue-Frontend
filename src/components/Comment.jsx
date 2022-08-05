const Comment = (props) => {
  return (
    <div className="individual-post-container">
      <h6>{props.comment.commenter}</h6>
      <h5>{props.comment.body}</h5>
    </div>
  )
}

export default Comment