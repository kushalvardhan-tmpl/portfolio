import "../stylecomponents/about.css";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
const About = () => {
  return (
    <>
      <div className="Container">
        <h1 id="head">About me</h1>
        <div className="aboutContainer">
          <div className="profilepic">
            <img src={"/assets/profile-pic.png"} alt="Pic" />
          </div>
          <div className="aboutme">
            <h1>Saikat Mondal</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              nihil, quibusdam cumque totam praesentium eligendi neque, quaerat
              est dignissimos sit a debitis! Aliquam totam debitis nam sequi
              odit soluta laborum.
            </p>
            <button id="btn">Contact me</button>
            <br />
            <div className="icons">
              {/* <div id="fbIcon"> */}
              <button
                onClick={() =>
                  openInNewTab("https://www.facebook.com/your-page-url")
                }
              >
                <img src={"/assets/fb-logo.png"} alt="facebook" />
              </button>
              {/* </div> */}
              {/* <div id="twitterIcon"> */}
              <button
                onClick={() =>
                  openInNewTab("https://twitter.com/login?lang=en")
                }
              >
                <img src={"/assets/twitter-logo.png"} alt="twitter" />
              </button>
              {/* </div> */}
              {/* <div id="instaIcon"> */}
              <button
                onClick={() => openInNewTab("https://www.instagram.com/")}
              >
                <img src={"/assets/insta-logo.png"} alt="insta" />
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
