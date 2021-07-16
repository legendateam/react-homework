import Comment from "../comment/Comment";
import {useEffect} from "react";
import {getComments} from "../api/Api";

export default function Comments({dispatch, comments}) {
    useEffect(()=> {
        getComments().then(value => dispatch({type: "ADD_COMMENTS", payload: value.data}))
    }, [])
  return (
      <div>
          {
              comments.map(value => <Comment key={value.id} comment={value}/>)
          }
      </div>
  )
};