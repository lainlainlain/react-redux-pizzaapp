import React, { useState } from "react";

const Categories = React.memo(({ items, onClickCategory, activeCategory }) => {


  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>

        {items.map((item, index) => {
          return (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
