import {BrowserRouter as Router, Route, Switch, Link, withRouter} from "react-router-dom";
import Users from "./components/users/Users";
import Allposts from "./components/allposts/Allposts";
function App() {
  return (
      <Router>
          <div>
              <Link to={"/users"}>users</Link>
              <Switch>
                  <Route path={"/users"} component={Users}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
