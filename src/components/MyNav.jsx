import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // Toggle the active state when the NavLink is clicked
    setIsActive(!isActive);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="#"
            ClassName={isActive ? 'bg-blue-500' : ''}
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            activeClassName={isActive ? 'text-orange' : ''}
            onClick={handleClick}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            activeClassName={isActive ? 'text-red' : ''}
            onClick={handleClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
