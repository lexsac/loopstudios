import React from 'react';
import logo from '../images/logo.svg';
import './index.css';

const Logo = () => {
    return (
        <>
            <img className="logo" src={logo} alt='loopstudios logo' width="124" height="24" />
        </>
    )
}

export default Logo;