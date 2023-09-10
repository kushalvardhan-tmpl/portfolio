import Data2 from "../data2";
import { useState } from "react";
import Cards from "./cards";
import Buttons from "./buttons";
import "./category.css";

function CategoryData() {
  const [item, setItems] = useState(Data2);
  const categItems = [...new Set(Data2.map((val) => val.category))];
  const filterItems = (categ) => {
    const newCategory = Data2.filter((newval) => newval.category === categ);
    setItems(newCategory);
  };
  return (
    <div className="categories">
      <h1 className="Projects">My Projects</h1>
      <Buttons
        categItems={categItems}
        filterItems={filterItems}
        setItems={setItems}
      />
      <Cards item={item} />
    </div>
  );
}

export default CategoryData;
