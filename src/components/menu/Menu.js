import "./Menu.css"
export default function Menu(props) {
    let {pages} = props;
    let classes = ["target", "pont"]
  return (
      <ul>
          {
              pages.map((page, index) => <li key={index} className={classes}>{page}</li>)
          }
      </ul>
  )
};