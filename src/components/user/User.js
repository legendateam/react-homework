import {BrowserRouter as Router, Route, Switch, Link, withRouter, useParams} from "react-router-dom";
export default function User({usersList:{name,id}}) {
  return (
      <div>
          {name}  - <Link to={"/users/" + id + "/posts"}>posts</Link>
      </div>
  )
};