import React from 'react';
import './buttons.scss';

export const Button: React.FC = () => (
    <div className="button__container">
        <button className="button__item" aria-label="button timer" type="button">
            2 min
        </button>
        <button className="button__item" aria-label="button timer" type="button">
            5 min
        </button>
        <button className="button__item" aria-label="button timer" type="button">
            10 min
        </button>
        <button className="button__item" aria-label="button timer" type="button">
            Infinity loop
        </button>
    </div>
);
