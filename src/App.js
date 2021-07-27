import {BrowserRouter as Router, Route, Switch, Link, withRouter, useParams} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
function App() {
  return (
      <Router>
        <div>
          <Link to={"/users"}>users</Link>
          <Switch>
              <Route path={"/users/:id/posts"} component={Posts}/>
              <Route path={'/users'} component={Users}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
