import React from 'react';
import './App.scss';
import { Button } from './components/Button';
import { Clock } from './components/Clock';
import { ChangeBG } from './components/ChangeBG';

function App() {
    return (
        <div className="App">
            <header className="App-header" />
            <div className="main__page">
                <Button />
                <Clock />
                <ChangeBG />
            </div>
            <footer className="footer" />
        </div>
    );
}

export default App;
