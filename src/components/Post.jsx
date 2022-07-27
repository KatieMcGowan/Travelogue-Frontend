import { Link } from "react-router-dom"

const Post = (props) => {
  return(
    <div>
      <div className="post">
        <Link to={`/cities/san-francisco/${props.post._id}`}>
          <h4>{props.post.title}</h4>
        </Link>  
        <span className="post-poster">by {props.post.poster}</span>
        <span className="post-text">{props.post.body}</span>
      </div>
    </div>
  )
}

export default Post