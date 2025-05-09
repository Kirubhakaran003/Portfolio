import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true); // Set menu to open
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false); // Set menu to closed
  };

  return (
    <div className="navbar">
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        {isMenuOpen && (
          <img
            src={menu_close}
            onClick={closeMenu}
            alt="Close menu"
            className="nav-mob-close"
          />
        )}
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p className="home_menu">Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p className="about_menu">About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p className="project_menu">Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p className="contact_menu">Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default NavBar;
