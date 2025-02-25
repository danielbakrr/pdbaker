import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../assets/PDBaker.png';
import '../styles/Header.css';

const Header = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const typingRef = useRef(null);
  const fullText = "Hey, I'm Daniel!";
  
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;
    
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          // Add a pause before restarting
          setText('');
          currentIndex = 0;
          setTimeout(() => {
            typingInterval = setInterval(typeText, 100);
          }, 1000);
        }, 3000);
      }
    };
    
    typingInterval = setInterval(typeText, 100);
    typingRef.current = typingInterval;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      clearInterval(typingRef.current);
      clearInterval(cursorInterval);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav 
        className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}
        ref={menuRef}
      >
        <Container className="navbar-container">
          <a href="#" className="brand-container">
            <img 
              src={logo} 
              alt="Daniel Baker" 
              height="40" 
              className="logo"
            />
          </a>
          
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}></div>
          
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                <span className="nav-number">01.</span>About Me
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
                <span className="nav-number">02.</span>Projects
              </a>
            </li>
            <li>
              <a href="#certs" onClick={(e) => scrollToSection(e, 'certs')}>
                <span className="nav-number">03.</span>Proficiencies
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                <span className="nav-number">04.</span>Contact
              </a>
            </li>
          </ul>
        </Container>
      </nav>
      
      <Container fluid className="hero-section">
        <div className="hero-content">
          <h1 className="typing-text">
            {text}
            <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
          </h1>
          <p className="hero-subtitle">IT Student • Cloud Enthusiast • Soon-to-be Data Analyst</p>
          <div className="hero-cta">
            <a href="#about" className="btn btn-outline-light btn-lg me-3">Learn More</a>
            <a href="#contact" className="btn btn-primary btn-lg">Get in Touch</a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;