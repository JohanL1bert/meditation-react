import React from 'react';
import './changeBG.scss';

export const ChangeBG: React.FC = () => (
    <div className="bg__inner">
        <button aria-label="buutton change BG" type="button" className="bg__btn__left">
            left
        </button>
        <button aria-label="buutton change BG" type="button" className="bg__btn__rigth">
            right
        </button>
    </div>
);
