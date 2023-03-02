import React from 'react';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import heroImageMobile from '../images/mobile/image-hero.jpg';
import heroImageDesktop from '../images/desktop/image-hero.jpg';
import './index.css';

const Hero = () => {
    return (
        <div className="hero">
            <HeroImage mobileImage={heroImageMobile} desktopImage={heroImageDesktop} description = "hero-image" />
            <HeroText text={'Immersive experiences that deliver'}/> 
        </div>
    )
}

export default Hero;