import React from "react";
import SingleItems from "./SingleItems";

const Items = ({ items, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItems key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default Items;
