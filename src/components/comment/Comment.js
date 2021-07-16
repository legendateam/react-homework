export default function Comment({comment}) {
  return (
      <div>
              <h2>{comment.name}</h2>  
              <span>{comment.body}</span>
      </div>
  )
};