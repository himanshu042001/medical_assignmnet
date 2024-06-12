
import React from 'react';
import { FaHandsHelping, FaFileInvoiceDollar, FaUserMd, FaHospitalAlt } from 'react-icons/fa';
import './medical.css';

const Medical = () => {
  return (
    <div className="medical">
      <h1 className="medical-header">Our Medical Services</h1>
      <p className="medical-subheader">We are dedicated to serve you</p>
      <p className="medical-subheader">Best medical services</p>
      <div className="medical-cards">
        <div className="medical-card">
          <FaHandsHelping className="medical-icon" />
          <p className="medical-card-text">24*7 Dedicated Medical Experts</p>
        </div>
        <div className="medical-card">
          <FaFileInvoiceDollar className="medical-icon" />
          <p className="medical-card-text">100% Transparency in Pricing</p>
        </div>
        <div className="medical-card">
          <FaUserMd className="medical-icon" />
          <p className="medical-card-text">Experienced and Qualified Experts</p>
        </div>
        <div className="medical-card">
          <FaHospitalAlt className="medical-icon" />
          <p className="medical-card-text">Top Notch Hospitals and Centres</p>
        </div>
      </div>
    </div>
  );
};

export default Medical;
