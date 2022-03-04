import React, { useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Categories, SortPopup } from "../components";
import PizzaBlock from "../components/PizzaBlock";
import { useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { useDispatch } from "react-redux";

const typeNames = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавит", type: "alphabet" },
];

const categoriesNames = ["Мясные", "Вегетарианские", "Острые", "Закрытые"];

const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  const selectCategoryHandler = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories onClickItem={selectCategoryHandler} items={categoriesNames} />
            <SortPopup items={typeNames} />
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
