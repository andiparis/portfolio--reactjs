import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as NavBar } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import logo from '../../assets/icons/logo.jpg';

function Navbar() {
  const [expandNav, updateExpandNav] = useState(false);
  const [navColour, updateNavColour] = useState(false);

  const scrollHandler = () => {
    // When scrolling apply "sticky" class, otherwise just apply "navbar" class
    if (window.scrollY >= 20) {
      updateNavColour(true);
    } else {
      updateNavColour(false);
    }
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <NavBar
      fixed="top"
      expand="md"
      expanded={expandNav}
      className={navColour ? 'sticky' : 'navbar'}
      style={{ 'text-align': 'center' }}
    >
      <Container>
        <NavBar.Brand href="/" className="d-flex">
          <img src={logo} alt="logo" className="img-fluid logo" />
        </NavBar.Brand>
        {/* When the navbar toggle is clicked, change the expandNav value to true or false */}
        <NavBar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpandNav(expandNav ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </NavBar.Toggle>
        <NavBar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              {/* After clicked the nav link, back to collapse the navbar */}
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpandNav(false);
                }}
              >
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => {
                  updateExpandNav(false);
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => {
                  updateExpandNav(false);
                }}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}

export default Navbar;
