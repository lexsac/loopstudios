import React from 'react';
import ResponsiveImage from './ResponsiveImage';
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
import './index.css';

const ImageGallery = () => {
    return (
      <div className="image-gallery">
        <HeadingText text={'Our creations'}/>
        <div className="image-gallery__container">
          <ResponsiveImage mobileImage={deepearthImageMobile} desktopImage={deepearthImageDesktop} description={'Deep Earth'} />
          <ResponsiveImage mobileImage={nightarcadeImageMobile} desktopImage={nightarcadeImageDesktop} description={'Night Arcade'} />
          <ResponsiveImage mobileImage={soccerteamImageMobile} desktopImage={soccerteamImageDesktop} description={'Soccer Team VR'}/>
          <ResponsiveImage mobileImage={gridImageMobile} desktopImage={gridImageDesktop} description={'The Grid'}/>
          <ResponsiveImage mobileImage={fromaboveImageMobile} desktopImage={fromaboveImageDesktop} description={'From Up Above VR'}/>
          <ResponsiveImage mobileImage={pocketborealisImageMobile} desktopImage={pocketborealisImageDesktop} description={'Pocket Borealis'}/>
          <ResponsiveImage mobileImage={curiosityImageMobile} desktopImage={curiosityImageDesktop} description={'The Curiosity'}/>
          <ResponsiveImage mobileImage={fisheyeMobile} desktopImage={fisheyeDesktop} description={'Make It Fisheye'}/>
        </div>
        <Button text={'See all'}/>
      </div>
    );
};

export default ImageGallery;