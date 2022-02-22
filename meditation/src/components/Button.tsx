import React from 'react';
import './buttons.scss';

export const Button: React.FC = () => {
    const getTime = () => {};

    return (
        <div className="button__container">
            <button className="button__item" aria-label="button timer" type="button" onClick={() => getTime()}>
                2 min
            </button>
            <button className="button__item" aria-label="button timer" type="button" onClick={() => getTime()}>
                5 min
            </button>
            <button className="button__item" aria-label="button timer" type="button" onClick={() => getTime()}>
                10 min
            </button>
            <button className="button__item" aria-label="button timer" type="button" onClick={() => getTime()}>
                Infinity loop
            </button>
        </div>
    );
};
