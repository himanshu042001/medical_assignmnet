
import React, { useState } from 'react';
import './FAQ.css';
import { FaPlus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header">FAQ (Questions)</h1>
      <div className="faq-content">
        <div className="faq-accordion">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                Will my doctor always be the same at Cure Stones?
                <FaPlus className="faq-icon" />
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>Answer to the question goes here.</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-box">
          <img
            src="https://us.images.westend61.de/0001046623pw/portrait-of-smiling-female-doctor-with-stethoscope-wearing-glasses-PNEF01002.jpg"
            alt="Doctor"
            className="faq-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
