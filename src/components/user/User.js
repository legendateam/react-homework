export default function User({user, funcid}) {
  return (
      <div>
          {user.name} - <button onClick={
          () => funcid(user.id)
      }>click posts</button>
      </div>
  )
};