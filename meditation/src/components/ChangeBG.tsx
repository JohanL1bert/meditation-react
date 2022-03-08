import React from 'react';
import './changeBG.scss';

export const ChangeBG = ({ setCounter }: { setCounter: React.Dispatch<React.SetStateAction<number>> }) => {
    const goPrev = () => {
        setCounter((prev) => prev - 1);
    };

    const goNext = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <div className="bg__inner">
            <button aria-label="buutton change BG" type="button" className="bg__btn__left" onClick={goPrev}>
                prev
            </button>
            <button aria-label="buutton change BG" type="button" className="bg__btn__rigth" onClick={goNext}>
                next
            </button>
        </div>
    );
};
