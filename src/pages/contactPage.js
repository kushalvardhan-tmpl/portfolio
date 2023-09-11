import React from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import "../stylecomponents/contactpage.css";
const ContactPage = () => {
  return (
    <>
      <Header />
      <div id="mainC">
        <div className="main-contact">
          <div className="contactHead">
            <h2>Contact Me</h2>
          </div>
          <div className="contactpage">
            <div className="form">
              <form>
                <div className="fullName">
                  <div id="firstname">
                    <label htmlFor="fname">
                      {" "}
                      <b>First Name</b>
                    </label>

                    <input type="text" id="fname" name="fname" />
                  </div>
                  <div id="lastname">
                    <label htmlFor="lname">
                      {" "}
                      <b>Last Name </b>
                    </label>

                    <input type="text" id="lname" name="fname" />
                  </div>
                </div>
                <div id="mail">
                  <label htmlFor="email"> Email</label>

                  <input type="text" id="email" name="email" />
                </div>
                <div id="textmsg">
                  <label htmlFor="message"> Message</label>

                  <input type="text" id="message" name="message" />
                </div>
              </form>
            </div>
            <div className="Sendbutton">
              <button>
                <b>Send Me </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="maps-C">
        <div className="gmaps">
          <h3>Gooogle map Location</h3>
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27387.66830880709!2d77.07813382621868!3d30.901804792085198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f86b5eef4ee27%3A0xa5e81a26852325ef!2sSolan%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1693808081315!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
