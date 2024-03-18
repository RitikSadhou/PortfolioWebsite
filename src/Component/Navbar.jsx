import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    < >
      <div className={`Container nav_bar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className='logo'>Portfolio</div>
        <div className={`right ${isMenuOpen ? 'show' : ''}`}>
          <div className='menu_icon' onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <NavLink to={"/home"} className="nav_items">Home </NavLink>
          <NavLink to={"/education"} className="nav_items">Education</NavLink>
          <NavLink to={"/project"} className="nav_items">Project</NavLink>
          <NavLink to={"/skills"} className="nav_items">Skills</NavLink>
          <NavLink to={"/contact"} className="nav_items">Contact</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
