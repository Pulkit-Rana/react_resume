import React from 'react'
import profilePhoto from '../../assets/images/user.jpg'
import './ProfileInfo.css'

const ProfileInfo = () => {
    return (
        <div className='profile container_shadow'>
            {/* <svg class="avatar avatar--180" viewBox="0 0 188 188"> */}
            {/* <g class="avtar-block">
                    
                </g> */}
            {/* </svg> */}
            <div className='avtar avtar-block' viewBox='0 0 188 188'>
                <img src={profilePhoto} alt='Profile Pic' />
            </div>
            <div>
                <h2>Pulkit Rana</h2>
                <p className='cd-headline loading-bar'>
                    <span className='cd-words-wrapper'>
                        <b className='is-visible'>Java Developer</b>
                        <b>Java Developer</b>
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
