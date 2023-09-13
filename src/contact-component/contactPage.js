import React from "react";
import Header from "../myComponents/header";
import Footer from "../myComponents/footer";
import Contact from "./contact";
import "./contactpage.css";
const ContactPage = () => {
  return (
    <>
      <Header />
      <div id="mainC">
        <div className="main-contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
