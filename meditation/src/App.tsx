import React, { useState } from 'react';
import './App.scss';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';
import { Button } from './components/Button';
import { Clock } from './components/Clock';
import { ChangeBG } from './components/ChangeBG';
import { BG } from './components/BG';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function App() {
    /* const fakeDuration = 600; */
    /* const [statusMusic, setStatusMusic] = useState<boolean>(false); */
    const [playStatus, setPlayStatus] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [soundTime, setSoundTime] = useState<number>(0);
    const [counter, setCounter] = useState<number>(0);

    if (loading) {
        return <MoonLoader css={override} loading={loading} size={150} />;
    }

    return (
        <div className="App">
            <header className="App-header" />
            <BG {...{ playStatus, counter, setLoading, loading }} />
            <div className="main__page">
                <Button {...{ setSoundTime }} />
                <Clock {...{ playStatus, setPlayStatus, soundTime, counter }} />
                <ChangeBG {...{ playStatus, setPlayStatus, counter, setCounter }} />
            </div>
            <footer className="footer" />
        </div>
    );
}

export default App;
