import React, { useState, useEffect } from 'react'
import './ProgressBar.css'

export const ProgressBar = ({ targetProgress }) => {
    const [progress, setprogress] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setprogress((prevProgress) => {

                let newProgress = prevProgress + 1;
                if (newProgress >= targetProgress) {
                    clearInterval(intervalId);
                    return targetProgress;
                }

                const newOffset = (newProgress / 100) * 472; // Adjust 472 based on your stroke-dasharray

                // Set the offset state
                setOffset(newOffset);


                return newProgress;
            })
        }, 30);
        return () => clearInterval(intervalId);
    }, [targetProgress]);

    return (
        <div className='progress-bar'>
            <div className='outer-circle'>
                <div className='inner-ciricle'>
                    <div id="number">{progress}%</div>

                </div>
            </div> 
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" style={{ '--dash-offset': `${472-472*(progress / 100)}px` }} />
            </svg>

        </div>
    ) 
}
