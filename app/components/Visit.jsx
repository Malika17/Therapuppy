import React from "react";
import "./Example.css";

const Visit = () => {
  return (
    <div className="visit">
      <div className="text-visit">
        <h1>
          <span> VISIT US NOW</span> <br />
          INTERNATIONAL DOG BAZAR, PANCH BATTI, NEW COLONY JAIPUR
        </h1>
      </div>
      <div className="location">
        <iframe
          className="map"
          title="TheraPuppy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56936.54912791969!2d75.78763095232297!3d26.886532601997843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6adbe0a7c29%3A0x7958658d562fc0ce!2sInternational%20Dog%20Bazar!5e0!3m2!1sen!2sin!4v1719436180481!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Visit;
