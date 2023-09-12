import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import About from "../about-component/about";
import Skills from "../skills-component/skills";
import Contact from "../contact-component/contact";
import MyBlogs from "../blogs-component/myblogs";
import CategoryData from "../projetcs-component/category";
import "../home-component/homebody.css";
import "../App.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="headingcontainer">
        <div className="headings">
          <h1>Web Developer and Designer</h1>
          <h3>Practices Development since 2018</h3>

          <div id="profilebutton">
            <Link to="/aboutpage">
              <b>Go Profile</b>
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <CategoryData />
      <MyBlogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
