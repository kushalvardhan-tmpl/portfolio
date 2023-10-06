import React, { useState } from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import "./contactpage.css";
function ContactPage() {
  const [formdata, setformdata] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "https://portfolio-website-lkvm.onrender.com/api/contact-me",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      if (response.ok) {
        console.log("Form data sent successfully");
        setformdata({
          ...formdata,
          fname: "",
          lname: "",
          email: "",
          message: "",
        });
        alert("Form data sent successfully");
      } else {
        console.error("Failed to send form data");
        alert("Failed to send form data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);
    }
  };

  const validateForm = () => {
    const { fname, lname, email, message } = formdata;

    if (!fname || !lname || !email || !message) {
      alert("All fields are required");
      return false;
    }
    const namePattern = /^[a-zA-Z ]*$/;
    if (!namePattern.test(fname)) {
      alert("Digits cannot be used in the Firstname");
      return false;
    }
    if (!namePattern.test(lname)) {
      alert("Digits cannot be used in Lastname");
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return false;
    }

    return true;
  };
  return (
    <>
      <Header />
      <div id="mainC">
        <div className="main-contact">
          <div id="heading-contact">
            <h1>Contact Me</h1>
          </div>
          <div className="form-c">
            <form>
              <div className="f-fullName">
                <div id="firstname">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formdata.fname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div id="lastname">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formdata.lname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div id="u-mail">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  id="p-email"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="p-textmsg">
                <label htmlFor="message"> Message</label>
                <textarea
                  id="u-message"
                  name="message"
                  rows="15"
                  value={formdata.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="Send-btn">
                <button onClick={handleSubmit}>Send Me</button>
              </div>
            </form>
          </div>
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
}

export default ContactPage;
