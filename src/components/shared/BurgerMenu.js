import PropTypes from 'prop-types';
import React, { useState } from 'react';

function BurgerMenu(props) {
  const { links, renderLinks } = props;
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className="burger-menu">
      <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={() => toggleOpen(!isOpen)}>
        <div className="menu-btn__burger" />
      </div>
      {isOpen && <ul className="burger-menu__list">{renderLinks(links, false)}</ul>}
    </div>
  );
}

BurgerMenu.propTypes = {
  links: PropTypes.array,
  renderLinks: PropTypes.func,
};

export default BurgerMenu;
