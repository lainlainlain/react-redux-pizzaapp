import React from "react";
import { Outlet } from "react-router-dom";
import { Categories, SortPopup } from "../components";
import PizzaBlock from "../components/PizzaBlock";

const DUMMY_DATA = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавит", type: "alphabet" },
];

const Home = ({ items }) => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories items={["Мясо", "Sample"]} />
            <SortPopup items={DUMMY_DATA} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item, index) => (
              <PizzaBlock key={item.id} {...item}></PizzaBlock>
            ))}
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
