import { createContext, useState } from "react";
import { cuisineData, restaurantsData } from "./data";

export const menuContext = createContext();

// eslint-disable-next-line react/prop-types
export default function MenuContextProvider({ children }) {
  const [cuisine, setCuisineData] = useState(cuisineData);
  const [restoData, setRestoData] = useState(restaurantsData);
  const [input, setInput] = useState("");
  return (
    <menuContext.Provider
      value={{
        cuisine,
        setCuisineData,
        input,
        setInput,
        restoData,
        setRestoData,
      }}
    >
      {children}
    </menuContext.Provider>
  );
}
