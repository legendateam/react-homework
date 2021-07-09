export default function Post({clickFunc, item}) {
  return (
      <div>
          {item.id} - <button onClick={
          () => clickFunc(item.id)
      }> click me
      </button>
      </div>
  )
};