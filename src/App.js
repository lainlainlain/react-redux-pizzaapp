import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Cart from "./pages/Cart";
import Home from "./pages/Home";

import { Header } from "./components";

function App() {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/db.json")
      .then((res) => res.json())
      .then((data) => setPizza(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home items={pizza}></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
