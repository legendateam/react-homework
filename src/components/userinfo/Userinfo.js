export default function Userinfo({usersInfo}) {
  return (
      <div>
          {
              <strong>{usersInfo.username} - {usersInfo.email} - {
                  usersInfo.phone} - {usersInfo.website}</strong>
          }
      </div>
  )
};