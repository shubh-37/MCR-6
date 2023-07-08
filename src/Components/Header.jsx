import { useContext } from "react";
import { menuContext } from "../MenuContextProvider";

export default function Header() {
  
  const {input, setInput, cuisine} = useContext(menuContext);
  console.log(input)
  return (
    <div>
      <h1>Food Ordering App</h1>
      <h3>Select your Cuisine: </h3>
      <ul>
        {cuisine.map((item) => (
          <li key={item.id}>
            <button onClick={(e) => setInput(e.target.value)} value={item.id}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
