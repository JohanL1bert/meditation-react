import React, { useEffect, useRef } from 'react';
import './bg.scss';
import { profileVideo } from '../Profile';

interface IBg {
    playStatus: boolean;
    counter: number;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
}

export const BG = ({ playStatus, counter, setLoading, loading }: IBg) => {
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
    }, [playStatus, loading]);

    return (
        <video
            key={profileVideo[counter]}
            loop
            muted
            ref={videoEl}
            onLoadedData={() => {
                setLoading(false);
            }}
        >
            <source src={profileVideo[counter]} type="video/mp4" />
        </video>
    );
};
