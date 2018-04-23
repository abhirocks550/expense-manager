import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router';
import { Navbar, Nav, MenuItem, NavItem,
    NavDropdown } from 'react-bootstrap';

const NavBar = (props) => {
    let navBarSection =
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
            <NavItem componentClass={Link} href="/" to="/">
                Home
            </NavItem>
            <NavItem componentClass={Link} href="/about" to="/about">
                About
            </NavItem>
        </Nav>
        </Navbar.Collapse>
    </Navbar>;

    return navBarSection;
  };

export default NavBar;
