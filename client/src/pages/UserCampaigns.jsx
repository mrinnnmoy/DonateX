import React from 'react';

const UserCampaigns = () => {
  const CampaignList = [
    {
      id: 1,
      image: "https://i0.wp.com/educatebydonate.org/wp-content/uploads/2019/10/Sudan-education-under-tree.jpg?fit=688%2C447&ssl=1",
      name: "John Doe",
      type: "Education",
      title: "Help Build a School",
      goal: "$10,000",
      endDate: "2024-12-31",
      situation: "On-Going",
    },
    {
      id: 1,
      image: "https://i0.wp.com/regionsneuro.com/wp-content/uploads/2023/11/Regions-Healthcare-Open-Heart-Surgery-6.jpg?resize=1024%2C768&ssl=1",
      name: "Jane Smith",
      type: "Medicine",
      title: "Fund Critical Surgery",
      goal: "$20,000",
      endDate: "2025-02-10",
      situation: "Paid",
    },
    {
      id: 2,
      image: "https://www.shutterstock.com/image-photo/huddle-excited-group-people-outdoor-600nw-2469644061.jpg",
      name: "Bob Brown",
      type: "Social",
      title: "Community Support",
      goal: "$15,000",
      endDate: "2025-01-20",
      situation: "Paid",
    },
  ];

  return (
    <div className="campaign-list-container">
      <div className="campaign-list-head">
        <h1>Your Campaigns.</h1>
        <button className='start-campaign'>Start a Campaign</button>
      </div>

      {/* Campaign Cards */}
      <div className="campaign-cards">
        {CampaignList.map((campaign) => (
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
              <button className="donate-button">{campaign.situation}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default UserCampaigns;