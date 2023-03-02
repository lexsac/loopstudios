import React from 'react';
import './index.css';

const NavLink = ({ text }) => {
    return (
        <li className="header__nav-link">
            {text}
        </li>
    )
}

export default NavLink;