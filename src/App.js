import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Cart from "./pages/Cart";
import Home from "./pages/Home";

import { Header } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  window.test = () => {
    fetch("http://localhost:3001/db.json")
      .then((res) => res.json())
      .then((data) => dispatch(setPizzas(data.pizzas)));
  };

  useEffect(() => {
    fetch("http://localhost:3001/db.json")
      .then((res) => res.json())
      .then((data) => dispatch(setPizzas(data.pizzas)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
