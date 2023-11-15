import React from 'react'
import ProfileInfo from './ProfileInfo'
import ContactInfo from './ContactInfo'
import './Header.css'

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Header = () => {
    return (
        // Remove main class at the end.
        <main className='main'>
            {/* container bg color is white turn to black to see change. */}
            <section className="container">
                <ProfileInfo />
                <ContactInfo />
            </section>
        </main>
    )
}

export default Header
