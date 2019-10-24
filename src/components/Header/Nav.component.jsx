import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav id="primary-menu" className="style-2">
      <ul>
        <li>
          <Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
            About
          </Link>
        </li>
        <li>
          <a href="/">
            <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
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
