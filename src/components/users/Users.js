import {useEffect, useState} from "react";
import {getUsers} from "../api/Api";
import User from "../user/User";

export default function Users(props) {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    },[])
  return (
      <div>
          {
              users.map(value => <User key={value.id} usersList={value}/>)
          }
      </div>
  )
};