import React, { useState } from 'react';

const MobileNavButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <button onClick={toggle}></button>
    )
}

export default MobileNavButton;