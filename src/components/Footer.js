import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import './index.css';

const Footer = () => {
    return (
        <footer>
            <Logo className="footer__logo" />
            <Navigation className="footer__navigation" />
            <SocialLinks className="footer__social-links"/>
            <p>© 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}

export default Footer;