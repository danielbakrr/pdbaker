import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Let's get in touch!</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="d-flex justify-content-around">
              <a href="https://www.linkedin.com/in/daniel-baker-411490273/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none">
                <img 
                  src="https://cdn-icons-png.flaticon.com/256/61/61109.png" 
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
                  src="https://static.vecteezy.com/system/resources/previews/023/986/885/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" 
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
                  src="https://i.pinimg.com/originals/6e/2c/f9/6e2cf920c73d260231a7cb8a16933486.png" 
                  alt='Whatsapp'
                  className="img-fluid"
                  style={{ maxWidth: '50px' }}
                />
              </a>
              
              <a href="mailto:S10257120@connect.np.edu.sg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none">
                <img 
                  src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_Black_512px.png" 
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