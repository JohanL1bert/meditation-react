import React from 'react';
import './bg.scss';

export const BG = ({ videoState }: { videoState: string[] }) => (
    <video>
        <source src={videoState[0]} type="video/mp4" />
    </video>
);
