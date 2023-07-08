import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RestoDetail from "./pages/RestaurentDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurent/:restoId" element={<RestoDetail />} />
      </Routes>
    </>
  );
}

export default App;
