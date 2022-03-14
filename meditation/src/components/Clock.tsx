import React, { useEffect, useRef } from 'react';
import './clock.scss';
import playButton from '../assets/svg/play.svg';
import pauseButton from '../assets/svg/pause.svg';
import { profileMusic } from '../Profile';

const RadiusDashArray = 2 * Math.PI * 216.5;
/* const ZERODashOffset = 1360.3; */

export const Clock = (props: any) => {
    const { playStatus, setPlayStatus, soundTime, counter } = props;

    const svgEl = useRef(null);
    const audioRef = useRef(null);
    /* const [strokeLength, setStrokeLength] = useState<number>(0); */

    const changePlayStatus = () => {
        const audio = audioRef.current as unknown as HTMLAudioElement;

        /*         if (svgEl.current !== null) {
            const geometrySvgEl = svgEl.current as SVGGeometryElement;
        } */

        if (playStatus) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    useEffect(() => {
        changePlayStatus();
    }, [counter, playStatus]);

    /*     const covertTimer = () => {
        const time = soundTime;
    }; */

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
                        strokeDashoffset={1360.0}
                        strokeDasharray={RadiusDashArray}
                    />
                </svg>

                <p className="clock__time">{soundTime}</p>
            </div>
        </div>
    );
};
