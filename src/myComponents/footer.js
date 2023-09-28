import "../stylecomponents/footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerabout">
        <div className="footer-blog">
          <h1>About Blog</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            exercitationem sequi asperiores ducimus nam obcaecati id iste, dolor
            repellat quas adipisci. Nesciunt repellendus reprehenderit doloribus
            blanditiis commodi aspernatur cupiditate, mollitia cum, atque
            consectetur praesentium odio, provident deserunt temporibus nam rem?
          </p>
        </div>
        <div className="others">
          <h2>Links</h2>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutpage">About me</NavLink>
            <NavLink to="/contactpage">Contact me</NavLink>
          </div>
        </div>
      </div>
      <div id="end">
        <p>
          &#169;Tunica Design. All Rights Reserved. Designed By Kushal Vardhan{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
