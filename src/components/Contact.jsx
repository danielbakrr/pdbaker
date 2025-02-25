import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
      <h2 className="section-title text-center mb-5">Interested in working together?</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="d-flex justify-content-around">
              <a href="https://www.linkedin.com/in/daniel-baker-411490273/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none">
                <img 
                  src="https://img.icons8.com/?size=100&id=98960&format=png&color=FFFFFF" 
                  alt='LinkedIn' 
                  className="img-fluid"
                  style={{ maxWidth: '50px' }}
                />
              </a>
              
              <a href="https://www.instagram.com/daniielbaker/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none">
                <img 
                  src="https://img.icons8.com/m_outlined/512/FFFFFF/instagram-new.png" 
                  alt='Instagram'
                  className="img-fluid"
                  style={{ maxWidth: '50px' }}
                />
              </a>
              
              <a href="https://wa.me/98233055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none">
                <img 
                  src="https://img.icons8.com/m_outlined/512/FFFFFF/whatsapp.png" 
                  alt='Whatsapp'
                  className="img-fluid"
                  style={{ maxWidth: '45px' }}
                />
              </a>
              
              <a href="mailto:S10257120@connect.np.edu.sg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none">
                <img 
                  src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF" 
                  alt='Email'
                  className="img-fluid"
                  style={{ maxWidth: '50px' }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;