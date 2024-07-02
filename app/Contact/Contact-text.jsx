import React from "react";
import Instagram from "./Instagram";
import "./Contact.css";

const ContactText = () => {
  return (
    <div className="contact-page">
      <div className="contact-text">
        <h1>GET IN TOUCH</h1>
        <div className="address-text">
          <p>
            INTERNATIONAL DOG BAZAR <br /> MI ROAD PANCH BATTI <br />
            JAIPUR 302001
          </p>
          <h1>
            <u>THERAPUPPY_IDB@GMAIL.COM</u>{" "}
          </h1>
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default ContactText;
