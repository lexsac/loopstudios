import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import './index.css';

const Footer = () => {
    return (
        <footer>
            <Logo />
            <Navigation />
            <SocialLinks />
            <p>© 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}

export default Footer;