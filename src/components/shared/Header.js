import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import BurgerMenu from './BurgerMenu';
import GlobalPortal from './GlobalPortal';
import Login from './modals/Login';

function Header() {
  const [isOpen, toggleOpen] = useState(false);

  const links = [
    { name: 'HOME', to: '/home' },
    {
      name: 'AZIENDA',
      to: '/#',
      children: [
        { name: 'STORIA', to: '/home' },
        { name: 'MM DESIGN', to: '/home' },
        { name: 'DESIGNER', to: '/home' },
        { name: 'CERTIFICAZIONI', to: '/home' },
      ],
    },
    { name: 'COLLEZIONI', to: '/home' },
    { name: 'NEWS', to: '/home' },
    { name: 'CONTATTI', to: '/home' },
  ];

  const renderLinks = (links, renderChildren = true) => {
    return links.map((link, index) => {
      return (
        <NavLink key={index} className="navlink" to={link.to}>
          {link.name}
          {renderChildren && link.children && <ul className="dropdown-menu__list">{renderLinks(link.children)}</ul>}
        </NavLink>
      );
    });
  };

  const closeLogin = () => {
    toggleOpen(false);
  };

  return (
    <div className="main__header">
      {isOpen && (
        <GlobalPortal close={closeLogin}>
          <Login close={closeLogin} />
        </GlobalPortal>
      )}
      <div className="header-content">
        <div className="enter__block">
          <div className="enter" onClick={() => toggleOpen(true)}>
            AREA RISERVATA
          </div>
        </div>
        <div className="menu__container">
          <Link to="/home">
            <img className="logo" src={logo} alt="lampadari-icon" />
          </Link>
          <div className="navmenu">{renderLinks(links)}</div>
          <BurgerMenu links={links} renderLinks={renderLinks} />
        </div>
      </div>
    </div>
  );
}

export default Header;
