import React, { useState } from 'react';
import './App.scss';
import { Button } from './components/Button';
import { Clock } from './components/Clock';
import { ChangeBG } from './components/ChangeBG';
import { BG } from './components/BG';

function App() {
    /* const fakeDuration = 600; */
    /* const [statusMusic, setStatusMusic] = useState<boolean>(false); */
    const [soundTime, setSoundTime] = useState<number>(0);
    console.log(soundTime);

    return (
        <div className="App">
            <header className="App-header" />
            <BG />
            <div className="main__page">
                <Button {...{ setSoundTime }} />
                <Clock />
                <ChangeBG />
            </div>
            <footer className="footer" />
        </div>
    );
}

export default App;
