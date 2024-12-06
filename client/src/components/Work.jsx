import React from 'react';
import { BsFillGiftFill } from "react-icons/bs";
import { BsLightningFill } from "react-icons/bs";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const Work = () => {
  return (
    <div className='work' id='#Work'>
      <div className="work-top">
        <h1>Fund, Fast As <i>Flash</i></h1>
        <p>Fundraise at the speed of thought! Elevate your cause in just a minute
          with our lightning-fast fundraising platform.
        </p>
      </div>

      <div className="work-btm">
        <div className="work-box">
          <div className="icon">
            <BsFillGiftFill className='icons'/>
          </div>
          <h1>Ignite Impact</h1>
          <p>Spark joy by sharing your cause and the positive impact it brings.
            Clearly express how contributions will make a meaningful difference.</p>
        </div>
        <div className="work-box">
          <div className="icon">
            <BsLightningFill className='icons' />
          </div>
          <h1>Spread The Word</h1>
          <p>Leverage the speed of social media and online networks. Share
            your fundraising campaign swiftly across various platforms.</p>
        </div>
        <div className="work-box">
          <div className="icon">
            <BsGlobeCentralSouthAsia className='icons' />
          </div>
          <h1>Connect Globally</h1>
          <p>Build a strong social network around your cause. Encourage
            supporters to share their campaigns within their local communities.</p>
        </div>
      </div>
    </div>
  )
};

export default Work;