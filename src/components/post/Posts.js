export default function Posts(props) {
    let {item: post} = props;
  return (
      <div>
          {post.userId}.{post.id} - {post.title} - {post.body}
      </div>
  )
};