import React from 'react';
import './changeBG.scss';

export const ChangeBG: React.FC = () => {
    const goPrev = () => {};

    const goNext = () => {};

    return (
        <div className="bg__inner">
            <button aria-label="buutton change BG" type="button" className="bg__btn__left" onClick={goPrev}>
                left
            </button>
            <button aria-label="buutton change BG" type="button" className="bg__btn__rigth" onClick={goNext}>
                right
            </button>
        </div>
    );
};
