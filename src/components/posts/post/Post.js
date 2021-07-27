export default function Post({postList:{body,title}}) {
  return (
      <div>
          {body} - {title}
      </div>
  )
};