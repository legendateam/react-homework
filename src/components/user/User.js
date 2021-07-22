import {BrowserRouter as Router, Route, Switch, Link, withRouter} from "react-router-dom";
export default function User({items:{name, id}}) {
  return (
      <div>
          {name} - <Link to={"/users/" + id +"/posts"}>posts</Link>
      </div>
  )
};