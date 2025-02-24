import React from 'react';
import '../styles/Header.css';
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
      <h1 data-text="Hey, I'm Daniel!">Hey, I'm Daniel!</h1>
      <nav>
        <div className="nav-container">
          <img src={logo} alt="Logo" className="logo" />
          <ul>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Me</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
            <li><a href="#certs" onClick={(e) => scrollToSection(e, 'certs')}>Proficiencies</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contacts</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
