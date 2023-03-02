import React from 'react';
import NavLinks from './NavLinks';
import './index.css';

const Navigation = ({ isOpen }) => {
    const className = `header__nav ${isOpen ? 'open' : ''}`;

    return (
        <>
            <nav className={className}>
                <NavLinks isOpen={isOpen} />
            </nav>
        </>
    )
}

export default Navigation;