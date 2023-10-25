import React from 'react';
const profileImage=  require('../assets/logo192.png'); // Replace with your image URL
 
const ProfileInfo = () => {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a src={profileImage}  className="navbar-brand" href="/">Navbar</a>
      </div>
    </nav>
  </div>
  );
};

export default ProfileInfo;