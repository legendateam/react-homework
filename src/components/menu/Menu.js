import "./Menu.css"

export default function Menu(props) {
    let {pages} = props;
    let classes = ["target", "point"]

  return (
      <ul>
          {
              pages.map(page => <li className={classes.join(" ")}>{page}</li>)
          }
      </ul>
  );
};

