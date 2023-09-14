import React, { useState } from "react";
import "./contact.css";

function Contact() {
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

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return false;
    }

    return true;
  };

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
                <label htmlFor="lname">
                  <b>Last Name </b>
                </label>
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
            <div id="mail">
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                required
              />
            </div>
            <div id="textmsg">
              <label htmlFor="message"> Message</label>
              <textarea
                id="message"
                name="message"
                rows="10"
                value={formdata.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Sendbutton">
              <button onClick={handleSubmit}>
                <b>Send Me</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
