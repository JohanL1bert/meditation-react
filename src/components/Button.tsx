import React from 'react';
import './buttons.scss';
import { calculateTime, switcherTime, timerString } from '../helper';

interface ISoundTime {
    setSoundTime: React.Dispatch<React.SetStateAction<number>>;
    setInstanceTime: React.Dispatch<React.SetStateAction<number>>;
    setDistance: React.Dispatch<React.SetStateAction<number>>;
    RadiusDashArray: number;
    setClockTime: React.Dispatch<React.SetStateAction<string>>;
}

export const Button = React.memo(
    ({ setSoundTime, setInstanceTime, setDistance, RadiusDashArray, setClockTime }: ISoundTime) => {
        const getTime = (time: number) => {
            const newTimer = calculateTime(time);

            timerString.value = switcherTime(time);

            setClockTime(newTimer);
            setInstanceTime(time);
            setSoundTime(time);
            setDistance(RadiusDashArray);
        };

        return (
            <div className="button__container">
                <button className="button__item" aria-label="button timer" type="button" onClick={() => getTime(120)}>
                    2 min
                </button>
                <button className="button__item" aria-label="button timer" type="button" onClick={() => getTime(300)}>
                    5 min
                </button>
                <button className="button__item" aria-label="button timer" type="button" onClick={() => getTime(600)}>
                    10 min
                </button>
                <button
                    className="button__item"
                    aria-label="button timer"
                    type="button"
                    onClick={() => getTime(Infinity)}
                >
                    Infinity loop
                </button>
            </div>
        );
    }
);
