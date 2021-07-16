import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import {useReducer} from "react";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import reducer from "./components/reducer/Reducer";

function App() {
    let [state, dispatch] = useReducer(reducer, {users: [], posts: [], comments: []});
  return (
      <Router>
          <div>
              <Link to={"/"}>home page</Link>
              <br/>
              <Link to={"/users"}>users</Link>
              <br/>
              <Link to={"/posts"}>posts</Link>
              <br/>
              <Link to={"/comments"}>comments</Link>
              <br/>
              <hr/>
              <Switch>
                  <Route exact path={"/"}/>
                  <Route path={"/users"} render={(props) => <Users users={state.users} dispatch={dispatch}/>}/>
                  <Route path={"/posts"} render={(props) => <Posts posts={state.posts} dispatch={dispatch}/>}/>
                  <Route path={"/comments"} render= {(props) => <Comments comments={state.comments} dispatch={dispatch}/>}/>
              </Switch>
        </div>
      </Router>
  );
}

export default App;