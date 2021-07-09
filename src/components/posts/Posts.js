import Post from "../post/Post";

export default function Posts({items, appFunc}) {
  return (
      <div>
          {
              items.map(value => <Post key={value.id} item={value} clickFunc={appFunc}/>)
          }
      </div>
  )
};