import React, { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Categories, SortPopup } from "../components";
import PizzaBlock from "../components/PizzaBlock";
import { useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "../redux/actions/pizzas";
import PizzaLoadingBlock from "../components/PizzaBlock/LoadingBlock";

const typeNames = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
];

const categoriesNames = ["Мясные", "Вегетарианские", "Острые", "Закрытые"];

const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(category, sortBy);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, dispatch]);

  const selectCategoryHandler = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const selectPopupHandler = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const addPizzaHandler = (obj) => {
    console.log(obj);
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              onClickCategory={selectCategoryHandler}
              items={categoriesNames}
              activeCategory={category}
            />
            <SortPopup
              items={typeNames}
              activeSortBy={sortBy.type}
              onClickSortType={selectPopupHandler}
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoaded
              ? items.map((item, index) => (
                  <PizzaBlock
                    onAddPizza={addPizzaHandler}
                    key={item.id}
                    {...item}
                  ></PizzaBlock>
                ))
              : Array(12)
                  .fill(0)
                  .map((_, index) => <PizzaLoadingBlock key={index} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
