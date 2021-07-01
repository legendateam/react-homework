import {useEffect, useState} from "react";
import Posts from "../post/Posts";

export default function AllPosts() {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(postfromServer => {
                setPosts(postfromServer)
            })
    }, [])

  return (
      <ul>
          {
              posts.map(post => <li><Posts item={post}/></li>)
          }
      </ul>
  );
};