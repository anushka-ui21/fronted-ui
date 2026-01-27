import "./Footer.css";

import logo from "../../assets/iflogo.png";
import phone from "../../assets/phone icon.png";
import mail from "../../assets/vector.png";
import location from "../../assets/locationicon.png";
import appStore from "../../assets/appleicon.jpg";
import playStore from "../../assets/googleplay.png";

import facebook from "../../assets/facebookicon.png";
import twitter from "../../assets/twitericon.png";
import instagram from "../../assets/instagramicon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* ================= TOP ================= */}
        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-col">

            
            <div className="footer-brand">
              <img src={logo} alt="IFAS Logo" />
            </div>

            <p className="footer-desc">
              Let’s grow up your education level up. We are here to help
              you keep focus when studying.
            </p>

            <h4 className="footer-subtitle">Download App Now</h4>

            <div className="store-buttons">
              <div className="store-btn">
                <img src={appStore} alt="App Store" />
                <div className="store-text">
                  <span>Available on the</span>
                  <strong>App Store</strong>
                </div>
              </div>

              <div className="store-btn">
                <img src={playStore} alt="Google Play" />
                <div className="store-text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>About</li>
              <li>Course</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="footer-col">
            <h3 className="footer-title">Contact us</h3>

            <div className="contact-item">
              <img src={phone} alt="Phone" />
              <span>+91-9172266888</span>
            </div>

            <div className="contact-item">
              <img src={mail} alt="Email" />
              <span>info@ifasmail.com</span>
            </div>

            <div className="contact-item address">
              <img src={location} alt="Location" />
              <span>
                ISH Infotech, Phase 1, Hinjawadi, Pune,
                Maharashtra - 411057
              </span>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="footer-bottom">
          <p>Copyright © 2023 | All Rights Reserved</p>

          <div className="social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
