import React from 'react';
import './index.css';

const HeroImage = ({ mobileImage, desktopImage, description }) => {
    return (
              <picture className='hero__img'>
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