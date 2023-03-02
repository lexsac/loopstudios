import React from 'react';
import './styles/ResponsiveImage.css';

const ResponsiveImage = ({ mobileImage, desktopImage, description }) => {
    return (
              <picture className={`img`}>
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

export default ResponsiveImage;