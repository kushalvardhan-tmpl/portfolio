import "../stylecomponents/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h3>About Blog</h3>
      <div className="footerabout">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          exercitationem sequi asperiores ducimus nam obcaecati id iste, dolor
          repellat quas adipisci. Nesciunt repellendus reprehenderit doloribus
          blanditiis commodi aspernatur cupiditate, mollitia cum, atque
          consectetur praesentium odio, provident deserunt temporibus nam rem?
        </p>
        <div className="others">
          <h2>Other Links</h2>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/aboutpage">About me</Link>
            <Link to="/contactpage">Contact me</Link>
          </div>
        </div>
      </div>
      <p>
        &#169;Tunica Design. All Rights Reserved.Designed By Kushal Vardhan{" "}
      </p>
    </div>
  );
};

export default Footer;
