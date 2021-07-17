import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import {useReducer} from "react";
import {getCommentsId, getPostsId} from "./components/api/Api";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import Reducer from "./components/reducer/Reducer";


function App() {
    let [state, dispatch] = useReducer(Reducer, {users: [], poststitle: undefined, posts: [], postscomments: undefined, comments: []})
    let {users, poststitle, posts, postscomments, comments} = state;

    const fnPostID = (id) => getPostsId(id).then(value => dispatch({type: "ADD_POSTS_ID", payload: value.data}))
    const fnCommentsID = (id) => getCommentsId(id).then(value => dispatch({type: "ADD_COMMENTS_ID", payload: value.data}))

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
                <Switch>
                    <Route exact path={"/"}/>
                    <Route path={"/users"} render={(props) => <Users {...props} dispatch={dispatch} users={users} fnPostID={fnPostID} poststitle={poststitle}/>}/>
                    <Route path={"/posts"} render={(props) => <Posts {...props} dispatch={dispatch} posts={posts} fnCommentsID={fnCommentsID} postscomments={postscomments}/>}/>
                    <Route path={"/comments"} render={(props) => <Comments {...props} dispatch={dispatch} comments={comments}/>}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
