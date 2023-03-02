import React from 'react';
import SocialLink from './SocialLink';
import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import PinterestIcon from '../images/icon-pinterest.svg';
import InstagramIcon from '../images/icon-instagram.svg';
import './styles/SocialLinks.css';

const SocialLinks = () => {
    return (
        <ul>
            <SocialLink src={FacebookIcon} alt={'Facebook icon'} />
            <SocialLink src={TwitterIcon} alt={'Twitter icon'} />
            <SocialLink src={InstagramIcon} alt={'Instagram icon'} />
            <SocialLink src={PinterestIcon} alt={'Pinterest icon'} />
        </ul>
    )
}

export default SocialLinks;