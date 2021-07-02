import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function AllComments() {

    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(value => value.json())
            .then(commentsfromServer => {
                setComments(commentsfromServer)
            });
    }, []);

  return (
      <div>
          {
              comments.map(comment => <Comment key={comment.id} item={comment}/>)
          }
      </div>
  )
};