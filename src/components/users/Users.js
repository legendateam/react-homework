import User from "../user/User";
import {useEffect, useState} from "react";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(userfromServer => {
                setUsers(userfromServer)
            });
    }, []);

  return (
      <div>
          {
              users.map((user, index ) => <User key={index} item={user}/>)
          }
      </div>
  )
};