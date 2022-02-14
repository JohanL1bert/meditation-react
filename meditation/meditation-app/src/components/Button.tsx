import React from 'react';
import './buttons.scss';

export const Button: React.FC = () => (
    <div className="button__container">
        <button className="button__item" aria-label="button timer" type="button" />
        <button className="button__item" aria-label="button timer" type="button" />
        <button className="button__item" aria-label="button timer" type="button" />
    </div>
);
