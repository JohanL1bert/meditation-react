import React from 'react';
import './buttons.scss';

/* interface ISoundTime {
    soundTime: number;
    setSoundTime: React.Dispatch<React.SetStateAction<number>>;
}
 */
export const Button = ({ setSoundTime }: { setSoundTime: React.Dispatch<React.SetStateAction<number>> }) => {
    const getTime = (time: number) => {
        setSoundTime(time);
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
