import React, { useEffect, useRef } from 'react';
import './bg.scss';
import { profileVideo } from '../Profile';

interface IBg {
    playStatus: boolean;
    counter: number;
}

export const BG = ({ playStatus, counter }: IBg) => {
    const videoEl = useRef(null);

    const handleChange = () => {
        const video = videoEl.current as unknown as HTMLVideoElement;
        if (playStatus) {
            video.play();
        } else {
            video.pause();
        }
    };

    useEffect(() => {
        handleChange();
    }, [playStatus]);

    return (
        <video key={profileVideo[counter]} loop muted ref={videoEl}>
            <source src={profileVideo[counter]} type="video/mp4" />
        </video>
    );
};
