import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileNavButton from './MobileNavButton';

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