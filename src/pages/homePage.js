import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import About from "../myComponents/about";
import Skills from "../myComponents/skills";
import Contact from "../myComponents/contact";
import MyBlogs from "../myComponents/blogsLists";
import data from "../data";
import data2 from "../data2";
import CategoryData from "../myComponents/category";
import "../stylecomponents/homebody.css";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="headingcontainer">
        <div className="headings">
          <h1>Web Developer and Designer</h1>
          <h3>Practices Development since 2018</h3>
          <button id="profilebutton">
            <b>Go Profile</b>
          </button>
        </div>
      </div>
      <About />
      <Skills />
      <CategoryData />
      <MyBlogs data={data} />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
