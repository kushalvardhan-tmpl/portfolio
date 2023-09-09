import React from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div>
      <Header />
      <Link to="/Singlepageblog" />
      <Footer />
    </div>
  );
};

export default Blogs;
