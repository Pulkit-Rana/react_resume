// Navbar.js
import React from 'react';
import '../styles/Navbar.css'; 
import ProfileInfo from './ProfileInfo';
import ContactInfo from './ContactInfo';

const Navbar = () => {
  return (
    <div className="navbar">
      <ProfileInfo />
      <ContactInfo />
    </div>
  );
};

export default Navbar;



