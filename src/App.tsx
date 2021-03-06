import React, { useState } from 'react';
import './App.scss';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';
import { Button } from './components/Button';
import { Clock } from './components/Clock';
import { ChangeBG } from './components/ChangeBG';
import { BG } from './components/BG';
import { timerString } from './helper';

const override = css`
    display: flex;
    margin: 0 auto;
    border-color: red;
`;

const RadiusDashArray = 2 * Math.PI * 216.5;

function App() {
    const [playStatus, setPlayStatus] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [soundTime, setSoundTime] = useState<number>(120);
    const [timerInstance, setInstanceTime] = useState<number>(120);
    const [counter, setCounter] = useState<number>(0);
    const [distance, setDistance] = useState<number>(RadiusDashArray);
    const [clockTime, setClockTime] = useState<string>(timerString.value);

    return (
        <div className="App">
            <BG {...{ playStatus, counter, setLoading, loading }} />
            {loading ? (
                <div className="spinner">
                    <MoonLoader css={override} loading={loading} size={250} />
                </div>
            ) : (
                <div className="main__page">
                    <Button
                        {...{
                            setSoundTime,
                            setInstanceTime,
                            setDistance,
                            RadiusDashArray,
                            setClockTime,
                        }}
                    />
                    <Clock
                        {...{
                            playStatus,
                            setPlayStatus,
                            soundTime,
                            setSoundTime,
                            counter,
                            timerInstance,
                            distance,
                            setDistance,
                            RadiusDashArray,
                            clockTime,
                            setClockTime,
                        }}
                    />
                    <ChangeBG
                        {...{
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
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
