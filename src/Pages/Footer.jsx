import React from "react";
import "./Footer.css"; // Import your custom styles

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container foter_container">
        <div className="footer_logo">
          <img
            src="https://olympic.ind.in/public/img/img/footer_logo.png"
            className="img-fluid"
            alt="Indian Olympic Association Logo"
          />
          <h3>All INDIA SPORTS MANAGEMENT </h3>
          <p>
            Olympic Bhawan, B-29, Qutub Institutional Area, New Delhi 110016,
            INDIA
          </p>
          <p>
            T: +91 11 ********** | E:{" "}
            <a href="mailto:ioa@olympic.ind.in">ioa@.ind.in</a> | W:{" "}
            <a href="https://www.olympic.ind.in">www.*.ind.in</a>
          </p>
        </div>

        <div className="social_media">
          <h3>
            Follow <span style={{fontWeight:"800px"}}>#WeAreMonetringIndia</span>
          </h3>
          <ul className="social_links">
            <li>
              <a
                href="https://www.facebook.com/WeAreTeamIndia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/WeAreTeamIndia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/weareteamindia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>
            <a href="https://olympic.ind.in/site-map"></a> | Copyright © 2024
            The Voids. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;