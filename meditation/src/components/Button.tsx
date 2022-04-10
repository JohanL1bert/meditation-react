import React from 'react';
import './buttons.scss';

interface ISoundTime {
    setSoundTime: React.Dispatch<React.SetStateAction<number>>;
    setInstanceTime: React.Dispatch<React.SetStateAction<number>>;
    setDistance: React.Dispatch<React.SetStateAction<number>>;
    RadiusDashArray: number;
}

export const Button = ({ setSoundTime, setInstanceTime, setDistance, RadiusDashArray }: ISoundTime) => {
    const getTime = (time: number) => {
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
            <button className="button__item" aria-label="button timer" type="button" onClick={() => getTime(Infinity)}>
                Infinity loop
            </button>
        </div>
    );
};
