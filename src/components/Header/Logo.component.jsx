import React from 'react';

import logo from '../../static/images/logov2.png';
import logoLarge from '../../static/images/logo-media@2x.png';

const Logo = () => {
  return (
    <div id="logo">
      <a
        href="/"
        className="standard-logo"
        data-dark-logo="demos/media-agency/images/logo-media-dark.png"
      >
        <img src={logo} alt="Canvas Logo" />{' '}
      </a>
      <a
        href="/"
        className="retina-logo"
        data-dark-logo="demos/media-agency/images/logo-media-dark@2x.png"
      >
        <img src={logoLarge} alt="Canvas Logo" />{' '}
      </a>
    </div>
  );
};

export default Logo;
