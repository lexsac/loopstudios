import React from 'react';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import heroImageMobile from '../images/mobile/image-hero.jpg';
import heroImageDesktop from '../images/desktop/image-hero.jpg';

const Hero = () => {
    return (
        <>
            <HeroImage mobileImage={heroImageMobile} desktopImage={heroImageDesktop} description = "hero-image" />
            <HeroText text={'Immersive experiences that deliver'}/> 
        </>
    )
}

export default Hero;