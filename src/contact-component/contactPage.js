import React from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import Contact from "./contact";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div id="mainC">
        <div className="main-contact">
          <Contact />
        </div>
      </div>
      <div className="google-map-code">
        <div className="maps-head">
          {" "}
          <h3>Google Maps Location</h3>
        </div>
        <div id="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27387.669512355784!2d77.05976460583734!3d30.901800585351456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f86b5eef4ee27%3A0xa5e81a26852325ef!2sSolan%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1694674049512!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
