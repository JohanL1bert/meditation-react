import React from 'react';
import './changeBG.scss';
import { lenOfProfile } from '../Profile';

interface IChangeBg {
    playStatus: boolean;
    setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setDistance: React.Dispatch<React.SetStateAction<number>>;
    RadiusDashArray: number;
}

export const ChangeBG = ({
    playStatus,
    setPlayStatus,
    counter,
    setCounter,
    setLoading,
    setDistance,
    RadiusDashArray,
}: IChangeBg) => {
    const goPrev = () => {
        if (playStatus) {
            setPlayStatus(false);
        }

        setDistance(RadiusDashArray);
        setLoading(true);
        return counter === 0 ? setCounter(lenOfProfile) : setCounter((prev) => prev - 1);
    };

    const goNext = () => {
        if (playStatus) {
            setPlayStatus(false);
        }

        setDistance(RadiusDashArray);
        setLoading(true);
        return counter === lenOfProfile ? setCounter(0) : setCounter((prev) => prev + 1);
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
