import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/PDBaker.png';

const Header = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <Container fluid className="py-3 text-center">
        <h1 className="display-4 fw-bold" data-text="Hey, I'm Daniel!">Hey, I'm Daniel!</h1>
      </Container>
      
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src={logo} 
              alt="Logo" 
              height="40" 
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Me</Nav.Link>
              <Nav.Link href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</Nav.Link>
              <Nav.Link href="#certs" onClick={(e) => scrollToSection(e, 'certs')}>Proficiencies</Nav.Link>
              <Nav.Link href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;