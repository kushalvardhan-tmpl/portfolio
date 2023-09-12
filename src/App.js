import "./App.css";
import ContactPage from "./contact-component/contactPage";
import HomePage from "./home-component/homePage";
import Blogs from "./blogs-component/blogs";
import HireMe from "./hireme-component/hireme";
import AboutPage from "./about-component/aboutpage";
import ScrollToTop from "./myComponents/ScrollToTop";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SinglePage from "./blogs-component/Singlepageblog";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contactpage" element={<ContactPage />}></Route>
        <Route path="/aboutpage" element={<AboutPage />}></Route>
        <Route path="/Singlepageblog/:blogId" element={<SinglePage />}></Route>
        <Route path="/hireme" element={<HireMe />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
