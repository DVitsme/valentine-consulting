import React from 'react';

import Logo from './Logo.component';
import Nav from './Nav.component';

const Header = () => {
  return (
    <header id="header" className="nobottomborder no-sticky">
      <div id="header-wrap">
        <div className="container-fluid clearfix">
          <div id="primary-menu-trigger">
            <i className="icon-reorder"></i>
          </div>

          <Logo />
          {/* <Nav /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
