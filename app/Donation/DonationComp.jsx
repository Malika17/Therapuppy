import React from "react";
import donation_img from "./donation_dog.png";
import Link from "next/link";

const Donation = () => {
  return (
    <div className="donation-wrapper">
      <div className="top-donation">
        <h1>MAKE A DIFFERENCE</h1>
        <div className="p-tag">
          <p>Your donation helps rescue puppies and provides</p>
          <p>a safe space for people to play and destress.</p>
        </div>
      </div>
      <div className="bottom-donation">
        <div className="donation-img">
          <img src={donation_img.src}></img>
          <Link href="/Donation_error">
            <div className="donation-btn">
              <h1>DONATE NOW!</h1>
            </div>
          </Link>
        </div>
        <div className="donation-text">
          <p>
            TheraPuppy is Jaipur's first-ever initiative where you can play and
            destress with rescue puppies. Your support helps us provide the best
            care for these pups and promote their adoption.
          </p>
          <div class="impact">
            <h2>Your Impact</h2>
            <p>
              Rescue and rehabilitation of puppies
              <br /> Medical care and vaccinations
              <br />
              Support for adoption events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
