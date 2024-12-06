import React from 'react';
import Logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section footer-logo">
          <div className="footer-logo-icon">
            <img src={Logo} alt="logo" />
            <h2>DonateX</h2>
          </div>
          <p>Empowering Change, One Transparent Donation at a Time.</p>
        </div>

        {/* Donate Links */}
        <div className="footer-section">
          <h3>Donate</h3>
          <ul>
            <li>Education</li>
            <li>Social</li>
            <li>Medicine</li>
            <li>Disaster</li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Accessibility</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Services</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© DonateX 2024, All Rights Reserved.</p>
        <div className="footer-socials">
          <span className="social-icon"><FaXTwitter /></span>
          <span className="social-icon"><FaLinkedin /></span>
          <span className="social-icon"><FaInstagram /></span>
          <span className="social-icon"><FaFacebookSquare /></span>
        </div>
      </div>
    </footer>
  )
};

export default Footer;