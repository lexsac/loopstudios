import React, { useState } from 'react';
import './index.css';

const MobileNavButton = ({ isOpen, onClick }) => {
    const className = `header__btn-toggle ${isOpen ? 'open' : ''}`;

    return (
        <button onClick={onClick} className={className}></button>
    )
}

export default MobileNavButton;