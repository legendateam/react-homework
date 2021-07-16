import User from "../user/User";
import {useEffect} from "react";
import {getUsers} from "../api/Api";

export default function Users({users, dispatch}) {
    useEffect(()=> {
        getUsers().then(value => dispatch({type: "ADD_USERS", payload: value.data}));
    }, []);
  return (
      <div>
          {
              users.map(value => <User key={value.id} item={value}/>)
          }
      </div>
  )
};