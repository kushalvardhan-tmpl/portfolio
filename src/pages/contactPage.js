import React from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import Contact from "../myComponents/contact";

const ContactPage = () => {
  return (
    <>
      <div>
        <Header />
        <div className="contactpage">
          <Contact />
        </div>
        <div className="gmaps">
          <label>Gooogle map Location</label>
          <div className="google-map-code">
            src=
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27387.66830880709!2d77.07813382621868!3d30.901804792085198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f86b5eef4ee27%3A0xa5e81a26852325ef!2sSolan%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1693808081315!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
