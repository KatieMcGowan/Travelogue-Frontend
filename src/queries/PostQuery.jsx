const url = `http://localhost:4000/posts`

class PostQuery {
  static all = () => {
    return fetch(`${url}`)
    .then(response => response.json())
    .then(jsonData => jsonData.posts)
    .catch(err => console.log(err))
  }
}

export default PostQuery