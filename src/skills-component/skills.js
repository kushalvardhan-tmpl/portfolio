import "./Myskills.css";
import DownloadButton from "./download";

const Skills = () => {
  return (
    <div>
      <>
        <div className="skillContainer">
          <h1 id="skillhead">My Skills</h1>
          <div className="cont">
            <div className="mySkillContent">
              <p>
                "I am proficient in HTML, CSS and javascript. I also have some
                amount of experience in PHP and wordpress."
              </p>
              <DownloadButton />
            </div>

            <div className="skillList">
              <li>
                HTML & CSS
                <span>95%</span>
              </li>
              <div id="percentage-bar1"></div>
              <li>
                Javascript
                <span>75%</span>
              </li>
              <div id="percentage-bar2"></div>
              <li>
                PHP
                <span>80%</span>
              </li>
              <div id="percentage-bar3"></div>
              <li>
                WordPress
                <span>95%</span>
              </li>
              <div id="percentage-bar4"></div>
              <li>
                Laravel
                <span>50%</span>
              </li>
              <div id="percentage-bar5"></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Skills;
