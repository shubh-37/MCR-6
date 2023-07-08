import { useContext } from "react";
import { menuContext } from "../MenuContextProvider";
import "../css/header.css";

export default function Header() {
  const { setInput, cuisine } = useContext(menuContext);
  return (
    <div className="header-parent">
      <h1>Food Ordering App</h1>
      <h2>Select your Cuisine: </h2>
      <ul className="cuisine-parent">
        {cuisine.map((item) => (
          <li key={item.id}>
            <div>
              <button
                onClick={(e) => setInput(e.target.value)}
                className="cuisine-btn"
                value={item.id}
              >
                {item.name}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
