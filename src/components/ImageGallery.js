import React from 'react';
import Image from './ResponsiveImage';
import HeadingText from './HeadingText';
import Button from'./Button';
import curiosityImageMobile from '../images/mobile/image-curiosity.jpg';
import curiosityImageDesktop from '../images/desktop/image-curiosity.jpg';
import deepearthImageMobile from '../images/mobile/image-deep-earth.jpg';
import deepearthImageDesktop from '../images/desktop/image-deep-earth.jpg';
import fisheyeMobile from '../images/mobile/image-fisheye.jpg';
import fisheyeDesktop from '../images/desktop/image-fisheye.jpg';
import fromaboveImageMobile from '../images/mobile/image-from-above.jpg';
import fromaboveImageDesktop from '../images/desktop/image-from-above.jpg';
import gridImageMobile from '../images/mobile/image-grid.jpg';
import gridImageDesktop from '../images/desktop/image-grid.jpg';
import nightarcadeImageMobile from '../images/mobile/image-night-arcade.jpg';
import nightarcadeImageDesktop from '../images/desktop/image-night-arcade.jpg';
import pocketborealisImageMobile from '../images/mobile/image-pocket-borealis.jpg';
import pocketborealisImageDesktop from '../images/desktop/image-pocket-borealis.jpg';
import soccerteamImageMobile from '../images/mobile/image-soccer-team.jpg';
import soccerteamImageDesktop from '../images/desktop/image-soccer-team.jpg';
import './styles/ImageGallery.css';

const ImageGallery = () => {
    return (
      <>
        <HeadingText text={'Our creations'}/>
        <Button text={'See all'}/>
        <p>This is where the images go</p>
      </>
    );
};

export default ImageGallery;