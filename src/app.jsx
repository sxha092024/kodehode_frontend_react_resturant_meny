import MENU from "./menu_data";
import Menu from "./menu";

import "./styles/app.css";

function App() {
  return (
    <>
      <h1>Meny</h1>
      <Menu menu={MENU} />
    </>
  );
}

export default App;
