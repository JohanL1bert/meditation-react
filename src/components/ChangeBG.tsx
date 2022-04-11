import React from 'react';
import './changeBG.scss';
import { lenOfProfile } from '../Profile';
import { timerString } from '../helper';

interface IChangeBg {
    playStatus: boolean;
    setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setDistance: React.Dispatch<React.SetStateAction<number>>;
    RadiusDashArray: number;
    setClockTime: React.Dispatch<React.SetStateAction<string>>;
    setSoundTime: React.Dispatch<React.SetStateAction<number>>;
    timerInstance: number;
}

export const ChangeBG = React.memo(
    ({
        playStatus,
        setPlayStatus,
        counter,
        setCounter,
        setLoading,
        setDistance,
        RadiusDashArray,
        setClockTime,
        setSoundTime,
        timerInstance,
    }: IChangeBg) => {
        const goPrev = () => {
            setSoundTime(timerInstance);
            setClockTime(timerString.value);

            if (playStatus) {
                setPlayStatus(false);
            }

            setDistance(RadiusDashArray);
            setLoading(true);
            return counter === 0 ? setCounter(lenOfProfile) : setCounter((prev) => prev - 1);
        };

        const goNext = () => {
            setSoundTime(timerInstance);
            setClockTime(timerString.value);

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
    }
);
