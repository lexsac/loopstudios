import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileNavButton from './MobileNavButton';
import './styles/Header.css';

const Header = () => {
    return (
        <>
            <Logo />
            <MobileNavButton />
            <Navigation />
        </>
    )
}

export default Header;