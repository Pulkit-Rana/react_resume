import React from 'react';
import '../styles/ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>Email: your.email@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <div className="social-icons">
        {/* Add your social media icons here */}
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-linkedin"></i>
      </div>
    </div>
  );
};

export default ContactInfo;