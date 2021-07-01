export default function User(props) {
    let {item: user} = props;
  return (
      <div key={user.id}>
              {user.id} - {user.name}
      </div>
  )
};