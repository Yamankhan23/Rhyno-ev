import React from 'react';
import './Contact.css'; 

const Contact = () => (
  <div className="contact">
    <h2 className="contact-title">Contact Us</h2>
    <div className="contact-info-container">
      <p className="contact-info">Email: <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
      <p className="contact-info">Mobile no.: +91-9023987528</p>
      <p className="contact-info">Location: Rhyno Wheels Private Limited, Near UG Hostel Gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
    </div>
  </div>
);

export default Contact;
