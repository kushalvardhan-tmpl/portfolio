import React from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import "./contactpage.css";
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
                      <b>First Name</b>
                    </label>
                    <input type="text" id="fname" name="fname" required />
                  </div>
                  <div id="lastname">
                    <label htmlFor="lname">
                      <b>Last Name </b>
                    </label>
                    <input type="text" id="lname" name="lname" required />
                  </div>
                </div>
                <div id="mail">
                  <label htmlFor="email"> Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div id="textmsg">
                  <label htmlFor="message"> Message</label>
                  <textarea id="message" name="message" rows="5" required />
                </div>
                <div className="Sendbutton">
                  <button>
                    <b>Send Me </b>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
