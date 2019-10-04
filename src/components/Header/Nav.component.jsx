import React from 'react';

const Nav = () => {
  return (
    <nav id="primary-menu" className="style-2">
      <ul>
        <li>
          <a href="/">
            <div>About</div>
          </a>
        </li>
        <li>
          <a href="/">
            <div>Services</div>
          </a>
        </li>
        <li>
          <a href="/">
            <div>Portfolio</div>
          </a>
        </li>
        <li>
          <a href="/">
            <div>Contact</div>
          </a>
        </li>
      </ul>

      <div className="header-social-set">
        <a href="/" className="social-icon si-small si-borderless si-facebook">
          <i className="icon-facebook"></i>
          <i className="icon-facebook"></i>
        </a>

        <a href="/" className="social-icon si-small si-borderless si-twitter">
          <i className="icon-twitter"></i>
          <i className="icon-twitter"></i>
        </a>

        <a href="/" className="social-icon si-small si-borderless si-github">
          <i className="icon-github"></i>
          <i className="icon-github"></i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
