import React from "react";
import "../stylecomponents/contact.css";

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
    </>
  );
};

export default Contact;
