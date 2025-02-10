import Dish from "./dish";
import "./styles/menu.css";

/**
 *
 * @param {*} props
 * @returns
 */
function Menu(props) {
  const { menu } = props;
  return (
    <div className="container">
      <ul className="menu">
        {menu.map((dish) => {
          const { id } = dish;
          return <Dish key={id} dish={dish} />;
        })}
      </ul>
    </div>
  );
}

export default Menu;
