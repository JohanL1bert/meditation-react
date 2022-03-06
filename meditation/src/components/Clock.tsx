import React, { useState, useRef } from 'react';
import './clock.scss';
import playButton from '../assets/svg/play.svg';
import pauseButton from '../assets/svg/pause.svg';

export const Clock: React.FC = () => {
    const [playStatus, setPlayStatus] = useState<boolean>(true);
    const svgEl = useRef(null);
    const [strokeLength, setStrokeLength] = useState<number>(0);

    const changePlayStatus = () => {
        if (svgEl.current !== null) {
            const geometrySvgEl = svgEl.current as SVGGeometryElement;
            const lenOfSvg = geometrySvgEl.getTotalLength();
        }
        setPlayStatus(!playStatus);
    };

    return (
        <div className="clock">
            <div className="clock__inner">
                <img
                    src={playStatus ? playButton : pauseButton}
                    alt="play button"
                    className="clock__play"
                    onClick={changePlayStatus}
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
                    <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" strokeWidth="20" strokeDasharray={} />
                </svg>

                <p className="clock__time">12:00</p>
            </div>
        </div>
    );
};
