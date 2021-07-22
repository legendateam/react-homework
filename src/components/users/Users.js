import {useEffect, useState} from "react";
import User from "../user/User";
import {BrowserRouter as Router, Route, Switch, Link, withRouter} from "react-router-dom";
import {getUsers} from "../api/Api";
import Allposts from "../allposts/Allposts";

export default function Users(props) {
    let [users,setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])
    return (
        <div>
            {
                users.map(value => <User key={value.id} items={value}/>)
            }
            <Switch>
                <Route path={"/users/:id/posts"} component={Allposts}/>
            </Switch>
        </div>
    )
};