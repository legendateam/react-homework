import Post from "../post/Post";
import Postscomments from "../postscomments/Postcomments";
import {useEffect} from "react";
import {getPosts} from "../api/Api";

export default function Posts({dispatch,posts,fnCommentsID,postscomments}) {
    useEffect(()=> {
        getPosts().then(value => dispatch({type: "ADD_POSTS", payload: value.data}))
    }, [])
  return (
      <div>
          {
              posts.map(value => <Post key={value.id} post={value} funccomID={fnCommentsID}/>)
          }
          <h2>
              {postscomments && <Postscomments anycomments={postscomments}/>}
          </h2>
      </div>
  )
};