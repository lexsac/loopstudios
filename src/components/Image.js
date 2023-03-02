import React from 'react';
import './index.css';

const Image = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} />
    );
};

export default Image;