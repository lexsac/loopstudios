import React, { useState } from 'react';
import MobileNavButton from './MobileNavButton';
import NavLinks from './NavLinks';
import './index.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const className = `header__nav ${isOpen ? 'open' : ''}`;

    return (
        <>
            <nav className={className}>
                <MobileNavButton isOpen={isOpen} onClick={toggle} />
                <NavLinks isOpen={isOpen} />
            </nav>
        </>
    )
}

export default Navigation;