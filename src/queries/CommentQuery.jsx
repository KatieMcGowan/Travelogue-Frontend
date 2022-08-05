const url = `http://localhost:4000/comments`

class CommentQuery {
  static all = () => {
    return fetch(`${url}`)
    .then(response => response.json())
    .then(jsonData => jsonData.comments)
    .catch(err => console.log(err))
  };

  static show = (id) => {
    return fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(jsonData => jsonData.comment)
    .catch(err => console.log(err))
  };

  static create = (commentData) => {
    return fetch (`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    })
    .then(response => response.json())
  };

  static update = (id, commentData) => {
    return fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    })
    .then(response => response.json())
  };

  static delete = (id) => {
    return fetch(`${url}/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
  };
};

export default CommentQuery