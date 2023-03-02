import React from 'react';
import NavLink from './NavLink';
import './index.css';;

const NavLinks = ({ isOpen }) => {
    const className = `header__nav-links ${isOpen ? 'open' : ''}`;

    return (
        <ul className={className}>
            <NavLink text={'About'} />
            <NavLink text={'Careers'} />
            <NavLink text={'Events'} />
            <NavLink text={'Product'} />
            <NavLink text={'Support'} />
        </ul>
    )
}

export default NavLinks;