import React from "react";
import { Outlet } from "react-router-dom";
import { Categories, SortPopup } from "../components";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({ items }) => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories items={["Мясо", "Sample"]} />
            <SortPopup items={["популярности", "цене", "алфавит"]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item, index) => (
              <PizzaBlock
                key={`${item}_${index}`}
                name={item.name}
                price={item.price}
                image={item.imageUrl}
              ></PizzaBlock>
            ))}
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
