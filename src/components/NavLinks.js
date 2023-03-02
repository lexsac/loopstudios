import React from 'react';
import NavLink from './NavLink';
import './styles/NavLinks.css';

const NavLinks = () => {
    return (
        <ul>
            <NavLink text={'About'} />
            <NavLink text={'Careers'} />
            <NavLink text={'Events'} />
            <NavLink text={'Product'} />
            <NavLink text={'Support'} />
        </ul>
    )
}

export default NavLinks;