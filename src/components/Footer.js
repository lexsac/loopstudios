import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <>
            <Logo />
            <Navigation />
            <SocialLinks />
            <p>© 2021 Loopstudios. All rights reserved.</p>
        </>
    )
}

export default Footer;