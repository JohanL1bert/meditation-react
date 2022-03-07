import React, { useRef } from 'react';
import './clock.scss';
import playButton from '../assets/svg/play.svg';
import pauseButton from '../assets/svg/pause.svg';

export const Clock = (props: any) => {
    const { playStatus, setPlayStatus, soundTime, music, videoState, setVideoState } = props;

    const svgEl = useRef(null);
    const audioRef = useRef(new Audio(music[0]));
    console.log(setVideoState);
    /* const [strokeLength, setStrokeLength] = useState<number>(0); */

    const changePlayStatus = () => {
        if (svgEl.current !== null) {
            /* const geometrySvgEl = svgEl.current as SVGGeometryElement; */
        }

        if (playStatus) {
            audioRef.current.loop = true;
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        console.log(videoState[0]);
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
                    <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" strokeWidth="20" strokeDasharray={1} />
                </svg>

                <p className="clock__time">{soundTime}</p>
            </div>
        </div>
    );
};
