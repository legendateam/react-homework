import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./users/Users";
import {useEffect, useReducer} from "react";
import {getComments, getPosts, getUsers} from "./api/Api";
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";

function reducer(state, action) {
    switch (action.type) {
        case "ADD_USERS" :
            return {...state, users: action.payload};
        case "ADD_POSTS" :
            return {...state, posts: action.payload};
        case "ADD_COMMENTS" :
            return  {...state, comments: action.payload};
        default:
            return  {...state}
    }
}

function App() {
    let {state, dispatch} = useReducer(reducer, {users: [], posts: [], comments: []});
    useEffect(()=> {
        getUsers().then(value => dispatch({type: "ADD_USERS", payload: value.data}));
    }, []);
    useEffect(()=> {
        getPosts().then(value => dispatch({type: "ADD_POSTS", payload: value.data}));
    }, []);
    useEffect(()=> {
        getComments().then(value => dispatch({type: "ADD_COMMENTS", payload: value.data}));
    }, []);
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
                  <Route path={"/users"} render={() => <Users users={state.users}/>}/>
                  <Route path={"/posts"} render={() => <Posts posts={state.posts}/>}/>
                  <Route path={"/comments"} render= {() => <Comments comments={state.comments}/>}/>
              </Switch>
      {/*лекцыя 3*/}
      {/*створити посилання /users, /posts, /comments.*/}
      {/*При переході на посилання відображати інформацію з jsonplaceholder про users/posts/comments */}
      {/*відповідно до посилання за логікою.*/}
      {/*Для всього використовувати окремий компонент (Users->User, Posts->Post)*/}

      {/*практична*/}
      {/*створити посилання /users, /posts, /comments.*/}
      {/*При переході на посилання відображати інформацію з jsonplaceholder про users/posts/comments відповідно */}
      {/*до посилання за логікою.*/}
      {/*Для всього використовувати окремий компонент (Users->User, Posts->Post).*/}
      {/*В компоненті user та post зробити кнопки. При натисканні на які відображаються пости юзера */}
      {/*(а в постах коментарі поста. Але не в постах юзера, а за урлою /posts)*/}
        </div>
      </Router>
  );
}

export default App;