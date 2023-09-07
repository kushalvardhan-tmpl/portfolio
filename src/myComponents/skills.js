import "../stylecomponents/Myskills.css";
const Skills = () => {
  return (
    <div>
      <>
        <div className="skillContainer">
          <h1 id="skillhead">My Skills</h1>
          <div className="mySkillContent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
              soluta, hic sed ad nulla eius tenetur a ut expedita, nobis
              similique ab facilis magnam nihil illo veritatis consectetur
              provident. Vero, iste. Minus reiciendis dolore nulla molestias
              omnis pariatur repellendus?
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
            <button>Download My CV</button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Skills;
