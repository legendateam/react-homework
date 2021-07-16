import Post from "../post/Post";
import {useEffect} from "react";
import {getPosts} from "../api/Api";

export default function Posts({posts,dispatch}) {
    useEffect(()=> {
        getPosts().then(value => dispatch({type: "ADD_POSTS", payload: value.data}));
    }, []);
  return (
      <div>
          {
              posts.map(value => <Post item={value}/>)
          }
      </div>
  )
};