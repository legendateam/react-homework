import {useEffect, useState} from "react";
import Posts from "../posts/Posts";

export default function User({item: user}) {

    let [post, setPosts] = useState([])

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + user.id + "/posts")
        .then(value => value.json())
        .then(valueFromServer => {
            setPosts(valueFromServer)
        })
}, [])

  return (
      <div>
          <h2>{user.name}</h2>
              <Posts items={post}/>
          <br/>
      </div>
  )
};