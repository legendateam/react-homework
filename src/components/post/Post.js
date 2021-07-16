export default function Post({post, funccomID}) {
  return (
      <div>
          {post.title} - <button onClick={
          () => funccomID(post.id)
      }>
          click me
      </button>
      </div>
  )
};