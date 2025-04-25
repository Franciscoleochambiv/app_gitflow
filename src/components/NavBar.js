import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';  // Asegúrate de importar Button
import { BrowserRouter as Router } from 'react-router-dom';
import portfolioData from '../Data/info';

// Define la función onLogout
const onLogout = () => {
  // Eliminar el token o cualquier dato de sesión
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  // Redirigir a la página de login
  window.location.href = '/login';  // También puedes usar react-router si prefieres redirigir sin recargar la página
};

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
            {/* Puedes agregar un logo o el nombre aquí */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Información</Nav.Link>
              {portfolioData.map((person) => (
                <Nav.Link key={person.id} href="#home" className={activeLink === person.info.name ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink(person.info.name); handleSelectPerson(person.id); }}>
                  {person.info.name}
                </Nav.Link>
              ))}
              {/* Botón de cerrar sesión */}
              <Button variant="outline-danger" size="sm" onClick={onLogout}>Cerrar sesión</Button>  {/* Asegúrate de usar onClick correctamente */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
