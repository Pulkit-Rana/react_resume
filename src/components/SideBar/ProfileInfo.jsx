import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import profilePhoto from "../../assets/images/user.jpg";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [avatarOffset, setAvatarOffset] = useState(0);
  const textRef = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 140);
    setAvatarOffset(Math.max(0, 140 - offset));
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const textWrapper = textRef.current;
      const titles = gsap.utils.toArray(textWrapper.querySelectorAll("p"));
      const staggerDuration = 0.03;
      const radius = 200; // Adjust this value to control the 3D effect depth
  
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  
      titles.forEach((title) => {
        const splitTitle = new SplitTextJS(title);
  
        // Animate each character
        tl.from(splitTitle.chars, {
          opacity: 0,
          y: 0,
          z: radius, // Start at the back of the circle
          rotateX: 90, // Rotate each character 90 degrees
          duration: staggerDuration,
          ease: "Power4.easeInOut",
          stagger: {
            each: staggerDuration,
            from: "center",
          },
        })
          .to(splitTitle.chars, {
            y: 0,
            z: -90, // Move to the front of the circle
            rotateX: 90, // Rotate back to normal
            duration: staggerDuration,
            ease: "Power4.easeInOut",
            stagger: {
              each: staggerDuration,
              from: "left",
            },
          })
          // Add additional animation after the character enters the front
          .to(splitTitle.chars, {
            opacity: 0,
            y: 80, // Move down after circling
            rotateX: 90,
            duration: staggerDuration,
            ease: "Power4.easeInOut",
            stagger: {
              each: staggerDuration,
              from: "left",
            },
          });
      });
    }
  }, [textRef]);
  

  return (
    <div className={`profile ${isSticky ? "sticky" : ""}`}>
      <div className="avatar-block" style={{ marginTop: `-${avatarOffset}px` }}>
        <img src={profilePhoto} alt="Profile Pic" onError={(e) => e.target.src = "fallback_image.png"} />
      </div>
      <div className="profile-content">
        <h1>Pulkit Rana</h1>
        <div className="jobtitles" ref={textRef}>
          <div className="text-wrapper">
            <p>Java Developer</p>
            <p>React Developer</p>
            <p>FrontEnd Developer</p>
          </div>
        </div>
      </div>
      {/* Replace "Insert Timeline" with your actual content */}
      <div className="profile_info">
        </div>
      <button>My Button</button>
    </div>
  );
};

export default ProfileInfo;
