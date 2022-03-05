import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Cart from "./pages/Cart";
import Home from "./pages/Home";

import { Header } from "./components";

function App() {
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
