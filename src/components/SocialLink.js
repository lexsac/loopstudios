import React from 'react';
import Image from './Image';
import './styles/SocialLink.css';

const SocialLink = ({ src, alt }) => {
    return (
        <li>
            <Image src={src} alt={alt} />        
        </li>
    )
}

export default SocialLink;