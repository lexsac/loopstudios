import React from 'react';
import Image from './ResponsiveImage';
import HeadingText from './HeadingText';
import interactiveImageMobile from '../images/mobile/image-interactive.jpg';
import interactiveImageDesktop from '../images/desktop/image-interactive.jpg';
import './styles/InfoSection.css';

const InfoSection = () => {
    return (
        <>
            <Image mobileImage={interactiveImageMobile} desktopImage={interactiveImageDesktop} description={'Man wearing a VR headset'} />
            <HeadingText text={'The leader in interactive VR'} />
            <p>Founded in 2011, Loopstudios has been producing world-class virtual 
                reality projects for some of the best companies around the globe. 
                Our award-winning creations have transformed businesses through digital 
                experiences that bind to their brand.</p>
        </>
    )
}

export default InfoSection;