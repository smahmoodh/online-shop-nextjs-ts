'use client'
import React, { useState, useEffect } from 'react'
import './ProgressBar.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 10
            )
        }, 600);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div className='loading-container'>
            <div className="loading-bar" style={{width:`${progress}%`}}></div>
        </div>
    )
}

export default ProgressBar