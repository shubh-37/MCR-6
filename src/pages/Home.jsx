import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { menuContext } from "../MenuContextProvider";

export default function Home() {
  const { input, restoData } = useContext(menuContext);
  return (
    <div>
      <Header />
      {input && (
        <div>
          <ul>
            {restoData
              .filter((item) => item.cuisine_id == input)
              .map((element) => (
                <li key={element.id}>
                  <h2>Dishes by {element.name}</h2><Link to={`/restaurent/${element.id}`}><span className="	fa fa-external-link"></span></Link>
                  <ul>
                    {element.menu.map(food => (
                      <li key={element.id}>
                        <img src={food.imgSrc} alt="" />
                        <h2>{food.name}</h2>
                        <p>Rs.{food.price} for {food.qty}</p>
                        <p>{element.name}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
