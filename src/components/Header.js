import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileNavButton from './MobileNavButton';
import './index.css';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
        </header>
    )
}

export default Header;