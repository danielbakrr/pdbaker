import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        <p className="mb-0">&copy; 2024 Putera Daniel Baker. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;