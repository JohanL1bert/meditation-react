import React from 'react';
import './bg.scss';
import videoRain from '../assets/video/rain.mp4';

export const BG = () => (
    <video>
        <source src={videoRain} type="video/mp4" />
    </video>
);
