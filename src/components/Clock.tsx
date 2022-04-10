import React, { useEffect, useRef } from 'react';
import './clock.scss';
import playButton from '../assets/svg/play.svg';
import pauseButton from '../assets/svg/pause.svg';
import { profileMusic } from '../Profile';
import { calculateTime } from '../helper';

export const Clock = (props: any) => {
    const {
        playStatus,
        setPlayStatus,
        soundTime,
        setSoundTime,
        counter,
        timerInstance,
        distance,
        setDistance,
        RadiusDashArray,
        clockTime,
        setClockTime,
    } = props;

    const svgEl = useRef<null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const changePlayStatus = () => {
        const audio = audioRef.current!;
        if (playStatus) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    const calculateSpeed = () => {
        const newDistance = RadiusDashArray / timerInstance;

        setDistance((prev: number) => prev + newDistance);
    };

    useEffect(() => {
        changePlayStatus();
    }, [counter, playStatus]);

    useEffect(() => {
        let timeTick: number;
        if (playStatus) {
            timeTick = window.setInterval(() => {
                calculateSpeed();
                const newTime = calculateTime(soundTime);
                setClockTime(newTime);
                const minusOneSecond = soundTime - 1;
                if (soundTime === 1) {
                    setPlayStatus(false);
                    setSoundTime(timerInstance);
                }
                setSoundTime(minusOneSecond);
            }, 1000);
        }

        return () => {
            if (timeTick) window.clearInterval(timeTick);
        };
    }, [soundTime, playStatus]);

    return (
        <div className="clock">
            <audio loop ref={audioRef} key={profileMusic[counter]}>
                <source src={profileMusic[counter]} />
            </audio>
            <div className="clock__inner">
                <img
                    src={!playStatus ? playButton : pauseButton}
                    alt="play button"
                    className="clock__play"
                    onClick={() => setPlayStatus(!playStatus)}
                    aria-hidden="true"
                />
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
                    ref={svgEl}
                    className="clock__moving__outline"
                    width="453"
                    height="453"
                    viewBox="0 0 453 453"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="226.5"
                        cy="226.5"
                        r="216.5"
                        stroke="#018EBA"
                        strokeWidth="20"
                        strokeDashoffset={distance}
                        strokeDasharray={RadiusDashArray}
                    />
                </svg>

                <p className="clock__time">{clockTime}</p>
            </div>
        </div>
    );
};
