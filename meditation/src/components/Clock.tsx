import React from 'react';
import './clock.scss';
import playButton from '../assets/svg/play.svg';

export const Clock = () => (
    <div className="clock">
        <div className="clock__inner">
            <img src={playButton} alt="play button" className="clock__play" />
            <svg
                className="clock__track__outline"
                width="453"
                height="453"
                viewBox="0 0 453 453"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="226.5" cy="226.5" r="216.5" stroke="white" strokeWidth="20" />
            </svg>
            <svg
                className="clock__moving__outline"
                width="453"
                height="453"
                viewBox="0 0 453 453"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" strokeWidth="20" />
            </svg>

            <p className="clock__time">12:00</p>
        </div>
    </div>
);
