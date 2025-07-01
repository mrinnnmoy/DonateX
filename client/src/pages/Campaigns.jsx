import React, { useState } from 'react';
import {ConnectButton} from "@rainbow-me/rainbowkit";

const Campaigns = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const CampaignList = [
    {
      id: 1,
      image: "https://i0.wp.com/educatebydonate.org/wp-content/uploads/2019/10/Sudan-education-under-tree.jpg?fit=688%2C447&ssl=1",
      name: "John Doe",
      type: "Education",
      title: "Help Build a School",
      goal: "$10,000",
      endDate: "2024-12-31",
    },
    {
      id: 1,
      image: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/01/surgery-scaled.jpeg?size=*:900",
      name: "Jane Smith",
      type: "Medicine",
      title: "Fund Critical Surgery",
      goal: "$20,000",
      endDate: "2025-02-10",
    },
    {
      id: 2,
      image: "https://www.shutterstock.com/image-photo/huddle-excited-group-people-outdoor-600nw-2469644061.jpg",
      name: "Bob Brown",
      type: "Social",
      title: "Community Support",
      goal: "$15,000",
      endDate: "2025-01-20",
    },
  ];

  // Get unique categories from campaigns
  const categories = ["All", ...new Set(CampaignList.map((campaign) => campaign.type))];

  // Filter campaigns based on the selected category
  const filteredCampaigns =
    selectedCategory === "All"
      ? CampaignList
      : CampaignList.filter((campaign) => campaign.type === selectedCategory);

  return (
    <div className="campaign-list-container">
      <ConnectButton />
      <div className="campaign-list-head">
        <h1>All On-Going Campaigns.</h1>
        {/* Category Dropdown */}
        <div className="category-dropdown">
          <button
            className="category-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory} ▼
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {categories.map((category) => (
                <div
                  key={category}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="campaign-cards">
        {filteredCampaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <div className="campaign-image">
              <img src={campaign.image} alt={`${campaign.title} image`} />
            </div>
            <div className="campaign-details">
              <h1 className="name">{campaign.name}</h1>
              <p className="title">{campaign.title}</p>
              <div className="donation-progress-bar">
                <div className="donation-progress" style={{ width: '70%' }}></div>
              </div>
              <div className="row">
                <span className="goal">Goal: {campaign.goal}</span>
                <span className="end-date">End Date: {campaign.endDate}</span>
              </div>
              <button className="donate-button">Donate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Campaigns;