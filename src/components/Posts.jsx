import Post from "./Post";

const Posts = (props) => {

  console.log(props)

  let newestPosts = []

  for (let i = props.posts.length - 1; i >= 0; i--) {
    newestPosts.push(props.posts[i]);
  }
  return (
    <div>
    {newestPosts.map(post => {
      return <Post 
              key={post._id}
              post={post}
              />  
    })}
    </div>                
  )
}  

export default Posts;