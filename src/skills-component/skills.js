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
              <ol>
                {" "}
                <li>
                  HTML & CSS
                  <span>95%</span>
                </li>{" "}
              </ol>
              <div id="percentage-bar1"></div>
              <ol>
                {" "}
                <li>
                  Javascript
                  <span>75%</span>
                </li>
              </ol>
              <div id="percentage-bar2"></div>
              <ol>
                {" "}
                <li>
                  PHP
                  <span>80%</span>
                </li>
              </ol>
              <div id="percentage-bar3"></div>
              <ol>
                {" "}
                <li>
                  WordPress
                  <span>95%</span>
                </li>
              </ol>
              <div id="percentage-bar4"></div>
              <ol>
                {" "}
                <li>
                  Laravel
                  <span>50%</span>
                </li>
              </ol>
              <div id="percentage-bar5"></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Skills;
