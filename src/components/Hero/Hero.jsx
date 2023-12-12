import React from 'react'
import './Hero.css'
import '../../App.css'
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import boy from "../../assets/images/boy.png";
import glassesimoji from "../../assets/images/glassesimoji.png";
import thumbup from "../../assets/images/thumbup.png";
import crown from "../../assets/images/crown.png";
import Github from "../../assets/images/github.png";
import LinkedIn from "../../assets/images/linkedin.png";
import Instagram from "../../assets/images/instagram.png";
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'

export const Hero = () => {

    return (
        <div className="hero" id="hero">
            <div className="hero-text">
                <div className='hero-name'>
                    <span>Hi! I Am</span>
                    <span>Pulkit Rana</span>
                    {/* need to add animation */}
                    <p className='cd-headline loading-bar'>
                        <span className='cd-words-wrapper'>
                            <b className='is-visible'>Java Developer</b>
                            <b>React Developer</b>
                            <b>Automation Expert</b>
                        </span>
                    </p>
                    <span>Hire me i am good motivated and have a lot of exp work with me hire me and get your mama to sit on my dick, get your sister to suck my cock</span>
                </div>
                <button className="button hero-button">Hire Me</button>
                <div className='hero-icons'>
                    <a href=''>
                        <img src={Github} alt='Social' />
                    </a>
                    <a href=''>
                        <img src={LinkedIn} alt='Social' />
                    </a>
                    <a href=''>
                        <img src={Instagram} alt='Social' />
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-1%', left: '68%' }}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
                </div>
                {/* blur divs */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    )
}
