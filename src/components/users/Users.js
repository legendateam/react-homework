import User from "../user/User";
import Posttitle from "../posttitle/Posttitle";
import {useEffect} from "react";
import {getUsers} from "../api/Api";

export default function Users({dispatch, poststitle, users, fnPostID}) {
    useEffect(()=> {
        getUsers().then(value => dispatch({type: "ADD_USERS", payload: value.data}))
    }, [])
  return (
      <div>
          {
              users.map(value => <User key={value.id} user={value} funcid={fnPostID}/>)
          }
          {
              poststitle && <div><Posttitle anyposts={poststitle}/></div>
          }
      </div>
  )
};