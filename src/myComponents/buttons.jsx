import React from "react";
import Data2 from "../data2";
import "./buttons.css";

function Buttons({ categItems, filterItems, setItems }) {
  return (
    <div className="Category-btn">
      <button className="All-btn" onClick={() => setItems(Data2)}>
        All
      </button>
      {categItems.map((val) => (
        <button className="btn-catg" onClick={() => filterItems(val)}>
          {val}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
