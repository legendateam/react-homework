import {useEffect, useState} from "react";
import {getPosts} from "../api/Api";
import Post from "./post/Post";
import {useParams} from "react-router-dom";

export default function Posts() {
    let {id} = useParams()
    let [post, setPosts] = useState({});
    useEffect(()=> {
        getPosts(id).then(value => setPosts({...value.data}))
    }, [id])
  return (
      <div>
          <Post postList={post}/>
      </div>
  )
};