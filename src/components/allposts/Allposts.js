import {BrowserRouter as Router, Route, Switch, Link, withRouter, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllPosts} from "../api/Api";
import Posts from "../posts/Posts";
export default function Allposts(props) {
    let {id} = useParams();
    let [posts, setPosts] = useState({});
    useEffect(() => {
        getAllPosts(id).then(value => setPosts({...value.data}))
    }, [id]);
  return (
      <div>
          <Posts item={posts}/>
      </div>
  )
};