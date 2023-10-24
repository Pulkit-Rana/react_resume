import React from 'react';
import profileImage from '../assets/logo192.png'; // Replace with your image URL

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <h1>Your Name</h1>
        <p>Title</p>
      </div>
    </div>
  );
};

export default ProfileInfo;