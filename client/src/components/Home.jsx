import React from 'react';
import Navbar from "./Navbar";
import Work from "./Work";
import Donate from "./Donate";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner" id='#Home'>
        <div className="banner-text">
          <h1>Fund</h1>
          <p>Help Others</p>
          <button className="start-fundraising-button">
            <a href="/Create" className='pages-link'>
              Start Fundraising
            </a>
          </button>
        </div>
      </div>
      <Work />
      <Donate />
      <About />
      <Footer />
    </>
  )
};

export default Home;