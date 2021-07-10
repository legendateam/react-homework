import {useEffect, useState} from "react";
import {getPosts, getUsers, getUsersInfo} from "./components/api/Api";
import Users from "./components/users/Users";
import Post from "./components/post/Post";
import Userinfo from "./components/userinfo/Userinfo";

function App() {
  let [post, setPosts] = useState()
  let appfn1 = (id) => {getPosts(id).then(value => setPosts(value.data))}
  let [users, setUsers] = useState([])
  let [usersInfo, setUsersInfo] = useState()
  let appfn2 = (id) => {getUsersInfo(id).then(value => setUsersInfo(value.data))}
  useEffect(()=> {
    getUsers().then(value => setUsers(value.data));
  }, []);
  let [appCallFunc, setappCallFunc] = useState()
  let appfn12 = (firstFunc,secondFunc) => {
    setappCallFunc(firstFunc,secondFunc)
  }
  return (
    <div>
      <Users items={users} appfn1={appfn1} appfn2={appfn2} appfn12={appfn12}/>
        <hr/>
        {
            usersInfo && post && <div>
                <Userinfo usersInfo={usersInfo}/>
                <hr/>
                <Post post={post}/></div>
        }
    </div>
  );
}

export default App;
