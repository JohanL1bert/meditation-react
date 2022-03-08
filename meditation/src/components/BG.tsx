import React, { useEffect, useRef } from 'react';
import './bg.scss';

export const BG = ({ playStatus, videoState }: { playStatus: boolean; videoState: string[] }) => {
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
        <video loop ref={videoEl}>
            <source src={videoState[0]} type="video/mp4" />
        </video>
    );
};
