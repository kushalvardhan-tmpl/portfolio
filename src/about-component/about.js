

import React, { useState, useEffect } from "react";
import "../about-component/about.css";
import { Link } from "react-router-dom";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const About = () => {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-website-lkvm.onrender.com/api/home/about-me"
        );
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <p>{apiData ? apiData.description : "Loading..."}</p>
            <Link to="/contactPage">
              <button id="btn">Contact me</button>
            </Link>
            <br />
            <div className="icons">
              <button
                onClick={() =>
                  openInNewTab("https://www.facebook.com/your-page-url")
                }
              >
                <img src={"/assets/fb-logo.png"} alt="facebook" />
              </button>
              <button
                onClick={() =>
                  openInNewTab("https://twitter.com/login?lang=en")
                }
              >
                <img src={"/assets/twitter-logo.png"} alt="twitter" />
              </button>
              <button
                onClick={() => openInNewTab("https://www.instagram.com/")}
              >
                <img src={"/assets/insta-logo.png"} alt="insta" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
