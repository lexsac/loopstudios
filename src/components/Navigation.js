import React, { useState } from 'react';
import NavLinks from './NavLinks';
import './styles/Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav>
                <NavLinks />
            </nav>
        </>
    )
}

export default Navigation;