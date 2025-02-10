import "./styles/dish.css";

/**
 *
 * @param {{id: number, tittel: string, pris: string, ingredienser: string, kategori: string}} props
 * @returns
 */
function Dish(props) {
  const { id, tittel, pris, ingredienser, kategori } = props.dish;
  return (
    <>
      <li>
        <div id={`dish-${id}`} key={`dish-${id}`} className="card">
          <h2 className="title">{tittel}</h2>
          <div>
            <p className="category">{kategori}</p>
            <p className="price">{pris}</p>
          </div>
          <p className="t-sm">Ingredienser:</p>
          <ul className="ingredients">
            {ingredienser
              .split(",")
              .map((s) => s.trim())
              .map((ingrediens) => {
                const [first, rest] = [
                  ingrediens.slice(0, 1),
                  ingrediens.slice(1),
                ];
                return (
                  <li
                    className="ingredient t-sm"
                    key={ingrediens}
                  >{`${first.toUpperCase()}${rest}`}</li>
                );
              })}
          </ul>
        </div>
      </li>
    </>
  );
}

export default Dish;
