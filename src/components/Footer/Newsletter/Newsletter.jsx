import "./Newsletter.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import React from "react";
const Newsletter = () => {
  return (
    <>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <span className="small-text">Newsletter</span>
          <span className="big-text"></span>
          <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
          <div className="text">
            Will be issued in accordance with our privacy policy
          </div>
          <div className="social-icons">
            <div className="icon"><FaFacebookF fontSize={14}/></div>
            <div className="icon"><FaInstagram fontSize={14}/></div>
            <div className="icon"><FaTwitter fontSize={14}/></div>
            <div className="icon"><FaLinkedinIn fontSize={14}/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
