import Post from "./Post";

const Posts = (props) => {
  return (
    <div>
    {props.posts.map(post => {
      return <Post 
              key={post._id}
              title={post.title}
              poster={post.poster}
              body={post.body}
              />  
    })}
    </div>                
  )
}  

export default Posts;