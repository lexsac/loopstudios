import React from 'react';

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