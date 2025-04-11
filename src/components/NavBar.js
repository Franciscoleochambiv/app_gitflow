//componente de la navegación

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import portfolioData from '../Data/info';

export const NavBar = ({ onSelectPerson }) => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    if (value === 'home') {
      onSelectPerson(null); // Restablecer a información por defecto
    }
  };

  const handleSelectPerson = (id) => {
    const person = portfolioData.find((p) => p.id === id);
    if (person) {
      onSelectPerson(person);
    }
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Información</Nav.Link>
              {portfolioData.map((person) => (
                <Nav.Link key={person.id} href="#home" className={activeLink === person.info.name ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink(person.info.name); handleSelectPerson(person.id); }}>{person.info.name}</Nav.Link>
              ))}
              
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
