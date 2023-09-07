import "./App.css";
import ContactPage from "./pages/contactPage";
import HomePage from "./pages/homePage";
import Blogs from "./pages/blogs";
import HireMe from "./pages/hireme";
import AboutPage from "./pages/aboutpage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contactpage" element={<ContactPage />}></Route>
        <Route path="/aboutpage" element={<AboutPage />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/hireme" element={<HireMe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
