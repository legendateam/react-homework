import Menu from "./components/menu/Menu";
import Users from "./components/users/Users";

export default function App() {
  return (
      <div>
          <Menu pages={["left", "center", "right"]}/>
          <Users/>
          <Menu pages={["downleft","downright"]}/>
      </div>
  )
}

