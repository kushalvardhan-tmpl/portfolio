import { useState } from "react";
import Cards from "./cards";

const data2 = [
  {
    id: 1,
    image: "/assets/banner-2.png",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quod!",
    category: "Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit deleniti dolorem cupiditate porro provident, deserunt sint minima! Aut quidem eius nam quis rem iusto deleniti facilis alias, eaque ipsum!",
  },
  {
    id: 2,
    image: "/assets/banner-1.png",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quod!",
    category: "technology",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit deleniti dolorem cupiditate porro provident, deserunt sint minima! Aut quidem eius nam quis rem iusto deleniti facilis alias, eaque ipsum!",
  },
  {
    id: 3,
    image: "/assets/banner-1.png",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quod!",
    category: "education",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit deleniti dolorem cupiditate porro provident, deserunt sint minima! Aut quidem eius nam quis rem iusto deleniti facilis alias, eaque ipsum!",
  },
];

function CategoryData() {
  const [item, setItems] = useState(data2);
  const categItems = [...new Set(data2.map((val) => val.category))];
  const filterItems = (categ) => {
    const newCategory = data2.filter((newval) => newval.category === categ);
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
  function Buttons({ categItems, filterItems, setItems }) {
    return (
      <div className="Category-btn">
        <button className="All-btn" onClick={() => setItems(data2)}>
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
}

export default CategoryData;
