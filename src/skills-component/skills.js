import { Link } from "react-router-dom";
import "./Myskills.css";
const Skills = () => {
  return (
    <div>
      <>
        <div className="skillContainer">
          <h1 id="skillhead">My Skills</h1>
          <div className="mySkillContent">
            <p>
              "I am proficient in HTML, CSS and javascript. I also have some
              amount of experience in PHP and wordpress."
            </p>
            <div className="skillList">
              <ul>
                HTML & CSS
                <span>95%</span>
              </ul>
              <div id="percentage-bar1"></div>
              <ul>
                Javascript
                <span>75%</span>
              </ul>
              <div id="percentage-bar2"></div>
              <ul>
                PHP
                <span>80%</span>
              </ul>
              <div id="percentage-bar3"></div>
              <ul>
                WordPress
                <span>95%</span>
              </ul>
              <div id="percentage-bar4"></div>
              <ul>
                Laravel
                <span>50%</span>
              </ul>
              <div id="percentage-bar5"></div>
            </div>
          </div>
          <div className="downloadCv">
            <button>
              {" "}
              <span>Download My CV</span>
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Skills;
