import User from "../user/User";

export default function Users({users}) {
  return (
      <div>
          {
              users.map(value => <User item={value}/>)
          }
      </div>
  )
};