import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="inputForm">
        <h1>Contact Me</h1>
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
              <textarea id="message" name="message" rows="10" required />
            </div>
            <div className="Sendbutton">
              <button>
                <b>Send Me</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
