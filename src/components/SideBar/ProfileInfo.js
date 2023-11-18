import React from 'react'
import profilePhoto from '../../assets/images/user.jpg'
import './ProfileInfo.css'

const ProfileInfo = () => {
    return (
        <div className='profile'>
            <div className='avtar-block' >
                <img src={profilePhoto} alt='Profile Pic' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Pulkit Rana</h2>
                <p className='cd-headline loading-bar'>
                    <span className='cd-words-wrapper'>
                        <b className='is-visible'>Java Developer</b>
                        <b>React Developer</b>
                    </span>
                </p>
            </div>
            <div className='profile_info'>
                Insert Timeline
                <br />
                <button>My Button</button>
            </div>
        </div>
    )
}

export default ProfileInfo
