import React, { useState } from "react";

const Categories = ({ items }) => {
  const [selectItem, setSelectItem] = useState(null);

  const selectItemHandler = (index) => {
    setSelectItem(index);
    console.log(selectItem);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={selectItem === null ? "active" : ""}
          onClick={() => selectItemHandler(null)}
        >
          Все
        </li>

        {items.map((item, index) => {
          return (
            <li
              className={selectItem === index ? "active" : ""}
              onClick={() => selectItemHandler(index)}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
