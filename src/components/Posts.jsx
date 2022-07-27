import Post from "./Post";

const Posts = (props) => {
  return (
    <div>
    {props.posts.map(post => {
      return <Post 
              key={post._id}
              post={post}
              />  
    })}
    </div>                
  )
}  

export default Posts;