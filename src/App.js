import {useEffect, useState} from "react";
import {getPost, getPosts} from "./components/api/Api";
import Posts from "./components/posts/Posts";

export default function App() {
       let [post, setPost] = useState();
       let appFunc = (id) => {getPost(id).then(value => setPost(value.data))};
       let [posts, setPosts] = useState([])
       useEffect(() => {
              getPosts().then(value => setPosts(value.data))
       }, [])
       return (
           <div>
                  <Posts items={posts} appFunc={appFunc}/>
                  <br/>
                  <hr/>
                  {

                         post && <div>{post.title} - {post.body}</div>
                  }
           </div>
       )
};
