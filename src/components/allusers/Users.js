import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(userFromServer => {
                setUsers(userFromServer)
            })
    }, [])

  return (
      <div>
          {
              users.map(user => <User key={user.id} item={user}/>)
          }
      </div>
  )
};