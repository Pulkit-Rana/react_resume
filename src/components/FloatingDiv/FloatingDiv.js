import React from 'react'
import './FloatingDiv.css'

export const FloatingDiv = ({ image, txt1, txt2 }) => {
    return (
        <div className="floating-div">
            <img src={image} alt='crown' />
            <span>
                {txt1}
                <br/>
                {txt2}
            </span>
        </div>


    )
}
