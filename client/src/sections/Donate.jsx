import React from 'react';

const Donate = () => {
  const donations = [
    {
      id: 1,
      organization: 'We Care',
      title: 'Green Fund: Sustain Earth Now',
      raised: '$50,000.00',
      daysLeft: '32 days left',
      image: 'https://www.packaging-gateway.com/wp-content/uploads/sites/16/2022/09/shutterstock_1658616850_edited.jpg',
    },
    {
      id: 2,
      organization: 'Unicef',
      title: 'Senior Health: Support Campaign',
      raised: '$42,000.00',
      daysLeft: '12 days left',
      image: 'https://www.datocms-assets.com/70447/1709060042-older-man-arthritis-elbow-joint-pain.jpg?fit=clip&fm=webp&q=60',
    },
    {
      id: 3,
      organization: 'Unity Foundation',
      title: 'Disaster Care: Urgent Support',
      raised: '$21,000.00',
      daysLeft: '19 days left',
      image: 'https://spotlight.lehigh.edu/sites/spotlight.lehigh.edu/files/170829-A-YG824-0001-1.jpg',
    },
  ];

  return (
    <>
      <div className="donate-main" id='Donate'>
        <h1>Urgent Fundraising!</h1>
        <p>
          Time is of the essence! Join our mission Now to make an immediate impact.
          Every second counts!
        </p>
        <div className="donation">
          {donations.map((donation) => (
            <div className="donation-box" key={donation.id}>
              <img src={donation.image} alt={donation.title} className="donation-img" />
              <div className="donation-content">
                <h1>{donation.organization}</h1>
                <p>{donation.title}</p>
                <div className="donation-progress-bar">
                  <div className="donation-progress" style={{ width: '70%' }}></div>
                </div>
                <div className="donation-info">
                  <h1>{donation.raised}</h1>
                  <p>{donation.daysLeft}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fundraiser */}
      <div className="fundraiser-container">
        <div className="image-overlay">
          <img
            src="https://media.istockphoto.com/id/920513764/photo/children-playing-outdoors-on-playground-hugging.jpg?s=612x612&w=0&k=20&c=vYDdGBjGFsily_H2-KKzsXg-6a4blbNjI1QE85VMI08="
            alt="Group hug"
            className="fundraiser-image top-left"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/64d3c725d37e4944bc421e02/1691600682609-JH8Z6TYGBDPBWFDVHV8A/male%2Bteachers%2Bof%2Bcolor_Brandon%2BMiller.jpg"
            alt="Person teaching"
            className="fundraiser-image top-right"
          />
          <img
            src="https://img.freepik.com/free-photo/two-boys-brothers-running-autumn-park_1303-25301.jpg"
            alt="Kids walking"
            className="fundraiser-image bottom-left"
          />
          <img
            src="https://cliniquedentairecharlestrottier.com/wp-content/uploads/2017/06/sourires.jpg"
            alt="People smiling"
            className="fundraiser-image bottom-right"
          />
        </div>
        <div className="text-overlay">
          <h1>Be The Part of Fundraisers With Over</h1>
          <h2 className="count">217,924+</h2>
          <p>People From Around The World Joined</p>
          <button className="join-button">
            <a href="/Donate" className='pages-link'>
              Join The Fundraisers Now!
            </a>
          </button>
        </div>
      </div>
    </>
  )
};

export default Donate;