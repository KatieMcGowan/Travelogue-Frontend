const Post = (props) => {
  return(
    <div>
        <div className="posts-display">
        <h4>{props.title}</h4>
        <span className="post-poster">by {props.poster}</span>
        <span className="post-text">{props.body}</span>
      </div>
    </div>
  )
}

export default Post