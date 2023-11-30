import React, { useState, useEffect } from 'react'
import './Header.css'
import { HomeIcon } from '../../utils/HomeIcon'
import { ResumeIcon } from '../../utils/ResumeIcon'
import { WorkIcon } from '../../utils/WorkIcon'
import { BlogIcon } from '../../utils/BlogIcon'
import { ContactIcon } from '../../utils/ContactIcon'

export const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div className={`header ${isSticky ? 'sticky' : ''}`}>
            <ul className="nav-item">
                <a href='www.google.com'>
                    <span className='text-xl mb-1'>
                        <HomeIcon />Home
                    </span>
                </a>
                <a href='www.google.com'>
                    <span className='text-xl mb-1'>
                        <ResumeIcon />Resume
                    </span>
                </a>
                <a href='www.google.com'>
                    <span className='text-xl mb-1'>
                        <WorkIcon />Work
                    </span>
                </a>
                <a href='www.google.com'>
                    <span className='text-xl mb-1'>
                        <BlogIcon />Blogs
                    </span>
                </a>
                <a href='www.google.com'>
                    <span className='text-xl mb-1'>
                        <ContactIcon />Contact
                    </span>
                </a>
            </ul>
        </div >
    )
}
