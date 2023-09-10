import React from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import { Link } from "react-router-dom";
import MyBlogs from "../myComponents/blogsLists";
import data from "../data";
const Blogs = () => {
  return (
    <div>
      <Header />
      <Link to="/Singlepageblog" />
      <MyBlogs data={data} />
      <Footer />
    </div>
  );
};

export default Blogs;
