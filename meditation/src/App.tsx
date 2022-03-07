import React, { useState } from 'react';
import './App.scss';
import { Button } from './components/Button';
import { Clock } from './components/Clock';
import { ChangeBG } from './components/ChangeBG';
import { BG } from './components/BG';
import videoRain from './assets/video/rain.mp4';
import soundRain from './assets/sounds/rain.mp3';

function App() {
    /* const fakeDuration = 600; */
    /* const [statusMusic, setStatusMusic] = useState<boolean>(false); */
    const [videoState, setVideoState] = useState<string[]>([videoRain]);
    const [playStatus, setPlayStatus] = useState<boolean>(true);
    const [soundTime, setSoundTime] = useState<number>(0);
    /*     const [counter, setCounter] = useState<number>(0); */
    const music = [soundRain];

    return (
        <div className="App">
            <header className="App-header" />
            <BG {...{ videoState }} />
            <div className="main__page">
                <Button {...{ setSoundTime }} />
                <Clock {...{ playStatus, setPlayStatus, soundTime, music, videoState, setVideoState }} />
                <ChangeBG {...{}} />
            </div>
            <footer className="footer" />
        </div>
    );
}

export default App;
