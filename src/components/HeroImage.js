import React from 'react';
import './styles/HeroImage.css';

const HeroImage = ({ mobileImage, desktopImage, description }) => {
    return (
              <picture className={`header__img`}>
                <source 
                    srcSet={desktopImage} 
                    media='(min-width: 60em)' 
                />
                <img 
                    src={mobileImage} 
                    alt={description} 
                />
              </picture>
            );
};

export default HeroImage;