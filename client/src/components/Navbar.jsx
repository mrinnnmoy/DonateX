import React, { useState, useEffect } from 'react';

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo.png";

const Navbar = () => {

  // Define navigation links
  const links = ["Home", "Workflow", "Donate", "About"];


  // State to track if the navbar is open or closed
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Close the navbar when clicking outside
  useEffect(() => {
    // Function to close the navbar on any document click
    const handleClickOutside = () => setIsNavOpen(false);

    // Add click event listener to the document to detect outside clicks
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener on component unmount to avoid memory leaks
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-container" data-state={isNavOpen ? 1 : 0}>

      {/* Logo section */}
      <div className="brand">
        <img src={Logo} alt="logo" />
        <span>DonateX</span>
      </div>


      {/* Navigation links section */}
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          {/* Map over links array to generate each link item */}
          {links.map((link, index) => (
            <li key={index}>
              <a href={`/#${link}`}>{link}</a>
            </li>
          ))}
          {/* Button section for account-related actions */}
          <div className="account-info">
            <ConnectButton />
          </div>
        </ul>
      </div>


      {/* Toggle button for opening/closing the navbar */}
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={(e) => {
            e.stopPropagation();
            setIsNavOpen(false);
          }} />
        ) : (
          // Hamburger icon - shown when the navbar is closed
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>

    </div>
  );
};

export default Navbar;