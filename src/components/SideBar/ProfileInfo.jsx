import React,{ useState, useEffect } from "react";
import profilePhoto from "../../assets/images/user.jpg";
import "./ProfileInfo.css";

const ProfileInfo = () => {
    const [isSticky, setIsSticky] = useState(false);
  const [avatarOffset, setAvatarOffset] = useState(0);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 140);

    // Adjust the offset value as needed for a smoother transition
    setAvatarOffset(Math.max(0, 140 - offset));
  };

  useEffect(() => {
    const initialOffset = window.scrollY;
    handleScroll(); // Initialize state based on initial scroll position

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`profile ${isSticky ? 'sticky' : ''}`}>
      <div className="avatar-block" style={{ marginTop: `-${avatarOffset}px` }}>
        <img src={profilePhoto} alt="Profile Pic" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Pulkit Rana</h2>
        <p className="cd-headline loading-bar">
          <span className="cd-words-wrapper">
            <b className="is-visible">Java Developer</b>
            <b>React Developer</b>
          </span>
        </p>
      </div>
      <div className="profile_info">
        Insert Timeline
        <br />
        <button>My Button</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
