export default function User({item, funcPosts, funcUsers, callback}) {
  return (
      <div>
          {item.id} - {item.name} <button onClick={
          () => callback(funcUsers(item.id), funcPosts(item.id))
      }>
          click me
      </button>
      </div>
  )
};