import React, { useState } from 'react';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How Can I Make Donations?",
      answer: "To donate on DonateX, click the Donate button, choose a cause, follow the donation instructions and confirm your payment.",
    },
    {
      question: "Is My Donation Tax-Deductable?",
      answer: "Whether your donation is tax-deductible depends on your location and local tax laws. Consult a tax professional for accurate information.",
    },
    {
      question: "Can I Donate In Honor or Memory Of Someone?",
      answer: "Absolutely! You can dedicate your donation in honor or memory of a loved one.",
    },
    {
      question: "How Will My Donation Be Used?",
      answer: "Your donation directly funds the campaigns you choose on DonateX. Funds are securely held in smart contracts and released to campaign creators based on predefined milestones, ensuring transparency and accountability.",
    },
    {
      question: "Can I Setup A Recurring Donation?",
      answer: "Yes, you can set up recurring donations on DonateX. This allows you to automatically donate a fixed amount at regular intervals, making it easy to support your chosen causes consistently.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="faq-container" id='About'>
      <h1>Frequently Asked Questions.</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
};

export default About;