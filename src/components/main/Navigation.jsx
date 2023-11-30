// eslint-disable-next-line no-unused-vars
import React from 'react';

function Navigation() {
  return (
    <nav>
      <h1>Andi Paris Bachtiar</h1>
      <ul className="navigation">
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
      </ul>
      <button className="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
    </nav>
  );
}

export default Navigation;
