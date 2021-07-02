import "./Comment.css"

export default function Comment(props) {
    let {item: comment} = props;
  return (
      <div>
          <ul>
              <li>
                  <h3>
                      {comment.postId}.{comment.id} -
                      Name: {comment.name} -
                      Email: <span className={"emailLine"}>{comment.email}</span>
                  </h3>
                  Comment {comment.body}
              </li>
          </ul>

      </div>
  )
};