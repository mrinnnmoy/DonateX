import React from 'react';

import Work from "../sections/Work";
import Donate from "../sections/Donate";
import About from "../sections/About";

const Home = () => {
  return (
    <>
      <div className="banner" id='Home'>
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
    </>
  )
};

export default Home;