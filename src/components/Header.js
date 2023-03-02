import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileNavButton from './MobileNavButton';
import './index.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className='header'>
            <Logo />
            <MobileNavButton isOpen={isOpen} onClick={toggle} />
            <Navigation isOpen={isOpen} />
        </header>
    )
}

export default Header;